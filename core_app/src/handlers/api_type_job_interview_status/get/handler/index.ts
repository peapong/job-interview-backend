import { mysqlConfig } from '../../../../utils';
import { type IRouteConfigGetTypeJobInterviewStatus } from '../schema';
import { getTypeJobInterviewStatus } from '../../../../data_services/model/get_type_job_interview_status';

export const taskGetTypeJobInterviewStatus: IRouteConfigGetTypeJobInterviewStatus['handler'] = async (_req, res) => {
    try {
        const result = await mysqlConfig.promise().query(await getTypeJobInterviewStatus());
        res.status(200).send({
            data: result[0],
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            error: 'An error occurred while fetching type job interviews.',
        });
    }
};
