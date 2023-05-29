import { type Static, Type } from '@sinclair/typebox';
import { type IJobInterviewMasterParams } from '..';

// Define the schema for the response data
export const getJobInterviewMasterSchema = Type.Object({
    job_master_id: Type.String(),
    job_interview_status_id: Type.Integer(),
    title_create_user_name: Type.String(),
    email: Type.String(),
    body_description: Type.String(),
    is_active: Type.Union([Type.Literal('n'), Type.Literal('y')]), // enum('n','y')
    created_at: Type.String({ format: 'date-time' }),
    job_status_name: Type.String(),
});

export type IGetAllJobInterviewMasterResult = Static<typeof getJobInterviewMasterSchema>;

export const getAllJobInterviewMaster = (params: IJobInterviewMasterParams): string => {
    const { matchProps } = params;
    const { limit, offset } = matchProps;
    const sql = `
    SELECT j.job_master_id, j.job_interview_status_id, j.title_create_user_name, j.email, j.body_description, j.is_active, j.created_at, t.job_status_name
    FROM job_interview_master j
    JOIN type_job_interview_status t ON j.job_interview_status_id = t.job_interview_status_id
    WHERE j.is_active = 'y'
    ${limit ? `LIMIT ${limit} ${offset ? `OFFSET ${offset}` : ``}` : ``}
    `;
    return sql;
};
