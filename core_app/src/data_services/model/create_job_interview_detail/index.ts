import { type Static } from '@sinclair/typebox';
import { getJobInterviewDetailSchema } from '../get_job_interview_detail';

export interface IBodyJobInterviewDetailMatchProps {
    job_detail_id?: string;
    title_comment_user_name?: string;
    body_comment?: string;
}

export interface IFindJobInterviewDetailByIdMatchProps {
    job_master_id?: string;
}
export interface ICreateJobInterviewDetailParams {
    matchProps: IFindJobInterviewDetailByIdMatchProps;
    values: IBodyJobInterviewDetailMatchProps;
}

export type ICreateJobInterviewDetailByIdResult = Static<typeof getJobInterviewDetailSchema>;

const createJobInterviewDetailById = (params: ICreateJobInterviewDetailParams): string => {
    const { matchProps, values } = params;
    const { job_master_id } = matchProps;
    const { job_detail_id, title_comment_user_name, body_comment } = values;

    const sql = `
    INSERT INTO job_interview_detail (job_detail_id, job_master_id, title_comment_user_name, body_comment)
    SELECT "${job_detail_id}", "${job_master_id}", "${title_comment_user_name}", "${body_comment}"
    FROM job_interview_master
    WHERE job_master_id = "${job_master_id}";
    `;

    return sql;
};

export async function createJobInterviewDetail(params: ICreateJobInterviewDetailParams): Promise<string> {
    return createJobInterviewDetailById(params);
}
