import { type Static, Type } from '@sinclair/typebox';

export interface IFindJobInterviewDetailByIdMatchProps {
    job_master_id?: string;
    limit?: number;
    offset?: number;
}
export interface IJobInterviewDetailByIdParams {
    matchProps: IFindJobInterviewDetailByIdMatchProps;
}

// Define the schema for the response data
export const getJobInterviewDetailSchema = Type.Object({
    job_detail_id: Type.String(),
    job_master_id: Type.String(),
    title_comment_user_name: Type.String(),
    body_comment: Type.String(),
    created_at: Type.String({ format: 'date-time' }),
});

export type IGetJobInterviewDetailByIdResult = Static<typeof getJobInterviewDetailSchema>;

const getJobInterviewDetailById = (params: IJobInterviewDetailByIdParams): string => {
    const { matchProps } = params;
    const { job_master_id, limit, offset } = matchProps;
    const sql = `
    SELECT *
    FROM job_interview_detail
    WHERE job_master_id = "${job_master_id}"
    ${limit ? `LIMIT ${limit} ${offset ? `OFFSET ${offset}` : ``}` : ``}
    `;
    return sql;
};

export async function getJobInterviewDetail(params: IJobInterviewDetailByIdParams): Promise<string> {
    return getJobInterviewDetailById(params);
}
