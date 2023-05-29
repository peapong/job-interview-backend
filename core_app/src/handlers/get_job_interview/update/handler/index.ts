import { mysqlConfig } from '../../../../utils';
import { IRouteConfigUpdateJobInterviewById } from '../schema';
import { updateJobInterviewMaster } from '../../../../data_services/model/update_job_interview_master';
import { ResultSetHeader } from 'mysql2';
import Query from 'mysql2/typings/mysql/lib/protocol/sequences/Query';

export const taskUpdateJobInterviewById: IRouteConfigUpdateJobInterviewById['handler'] = async (req, res) => {
    const { params: reqParams, body: reqBody } = req;
    console.log('check params->', reqParams, 'check body->', reqBody);
    try {
        await mysqlConfig.promise().query(
            await updateJobInterviewMaster({
                matchProps: {
                    job_master_id: reqParams.job_master_id,
                },
                values: {
                    job_interview_status_id: reqBody.job_interview_status_id,
                },
            }),
        );
        res.status(200).send({
            result: true,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            error: 'An error occurred while fetching job interviews.',
        });
    }
};
