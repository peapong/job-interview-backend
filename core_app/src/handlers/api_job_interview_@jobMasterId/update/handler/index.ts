import { mysqlConfig } from '../../../../utils';
import { type IRouteConfigUpdateJobInterviewById } from '../schema';
import { updateJobInterviewMaster } from '../../../../data_services/model/update_job_interview_master';
import { type OkPacket } from 'mysql2';

export const taskUpdateJobInterviewById: IRouteConfigUpdateJobInterviewById['handler'] = async (req, res) => {
    const { params: reqParams, body: reqBody } = req;

    try {
        const result = await mysqlConfig.promise().query(
            await updateJobInterviewMaster({
                matchProps: {
                    job_master_id: reqParams.job_master_id,
                },
                values: {
                    job_interview_status_id: reqBody.job_interview_status_id,
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
            error: 'An error occurred while update job interviews.',
        });
    }
};
