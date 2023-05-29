import { updateJobInterviewMasterArchiveCard } from '../../../../data_services/model/update_job_interview_master_archive_card';
import { mysqlConfig } from '../../../../utils';
import { type IRouteConfigUpdateJobInterviewArchiveCardById } from '../schema';
import { type OkPacket } from 'mysql2';

export const taskUpdateJobInterviewArchiveCardById: IRouteConfigUpdateJobInterviewArchiveCardById['handler'] = async (
    req,
    res,
) => {
    const { params: reqParams } = req;

    try {
        const result = await mysqlConfig.promise().query(
            await updateJobInterviewMasterArchiveCard({
                matchProps: {
                    job_master_id: reqParams.job_master_id,
                },
            }),
        );
        const affectedRows = (result[0] as OkPacket).affectedRows;
        if (affectedRows !== 1) {
            res.status(500).send({
                error: 'update card in database error',
            });
        } else {
            res.status(200).send({
                result: true,
            });
        }
    } catch (error) {
        res.status(500).send({
            error: 'An error occurred while update card in job interviews db.',
        });
    }
};
