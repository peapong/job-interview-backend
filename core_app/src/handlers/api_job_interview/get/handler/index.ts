import { mysqlConfig } from '../../../../utils';
import { getJobInterviewMaster } from '../../../../data_services/model/get_job_interview_master';
import { type IRouteConfigGetJobInterviewList } from '../schema';

export const taskGetJobInterview: IRouteConfigGetJobInterviewList['handler'] = async (req, res) => {
    const { query: reqQuery } = req;
    try {
        const result = await mysqlConfig.promise().query(
            await getJobInterviewMaster({
                matchProps: {
                    limit: reqQuery.limit,
                    offset: reqQuery.offset,
                },
            }),
        );
        res.status(200).send({
            data: result[0],
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            error: 'An error occurred while fetching job interviews.',
        });
    }
};
