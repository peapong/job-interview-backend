import { getJobInterviewDetail } from '../../../../data_services/model/get_job_interview_detail';
import { mysqlConfig } from '../../../../utils';
import { type IRouteConfigGetJobInterviewDetailById } from '../schema';

export const taskGetJobInterviewDetailById: IRouteConfigGetJobInterviewDetailById['handler'] = async (req, res) => {
    const { query: reqQuery, params: reqParams } = req;
    try {
        const result = await mysqlConfig.promise().query(
            await getJobInterviewDetail({
                matchProps: {
                    limit: reqQuery.limit,
                    offset: reqQuery.offset,
                    job_master_id: reqParams.job_master_id,
                },
            }),
        );
        res.status(200).send({
            data: result[0],
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            error: 'An error occurred while fetching job interviews Details.',
        });
    }
};
