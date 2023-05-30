import { mysqlConfig } from '../../../../utils';
import { type IRouteConfigCreateJobInterviewDetailById } from '../schema';
import { updateJobInterviewMaster } from '../../../../data_services/model/update_job_interview_master';
import { type OkPacket } from 'mysql2';
import { createJobInterviewDetail } from '../../../../data_services/model/create_job_interview_detail';
import { v4 } from 'uuid';

export const taskCreateJobInterviewDetailById: IRouteConfigCreateJobInterviewDetailById['handler'] = async (
    req,
    res,
) => {
    const { params: reqParams, body: reqBody } = req;

    try {
        const result = await mysqlConfig.promise().query(
            await createJobInterviewDetail({
                matchProps: {
                    job_master_id: reqParams.job_master_id,
                },
                values: {
                    job_detail_id: v4(),
                    title_comment_user_name: reqBody.title_comment_user_name,
                    body_comment: reqBody.body_comment,
                },
            }),
        );
        const affectedRows = (result[0] as OkPacket).affectedRows;
        if (affectedRows !== 1) {
            res.status(500).send({
                error: 'insert database error',
            });
        } else {
            res.status(200).send({
                result: true,
            });
        }
    } catch (error) {
        res.status(500).send({
            error: 'An error occurred while create detail in job interviews db.',
        });
    }
};
