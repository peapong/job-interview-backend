import { type Static, Type } from '@sinclair/typebox';

// Define the schema for the response data
export const getTypeJobInterviewStatusSchema = Type.Object({
    job_interview_status_id: Type.Integer(),
    is_active: Type.Union([Type.Literal('n'), Type.Literal('y')]), // enum('n','y')
    created_at: Type.String({ format: 'date-time' }),
    job_status_name: Type.String(),
});

export type IGetAllTypeJobInterviewStatusResult = Static<typeof getTypeJobInterviewStatusSchema>;

const getAllTypeJobInterviewStatus = `
    SELECT job_interview_status_id, job_status_name, is_active, created_at
    FROM type_job_interview_status
    WHERE is_active = 'y'
    `;

export async function getTypeJobInterviewStatus(): Promise<string> {
    return getAllTypeJobInterviewStatus;
}
