import { type Static } from '@sinclair/typebox';
import { getJobInterviewMasterSchema } from '../get_job_interview_master';

export interface IBodyJobInterviewStatusIdMatchProps {
    job_interview_status_id?: number;
}
export interface IFindJobInterviewMasterByIdMatchProps {
    job_master_id?: string;
}
export interface IUpdateJobInterviewMasterParams {
    matchProps: IFindJobInterviewMasterByIdMatchProps;
    values: IBodyJobInterviewStatusIdMatchProps;
}

export type IUpdateJobInterviewMasterByIdResult = Static<typeof getJobInterviewMasterSchema>;

const updateJobInterviewMasterById = (params: IUpdateJobInterviewMasterParams): string => {
    const { matchProps, values } = params;
    const { job_master_id } = matchProps;
    const { job_interview_status_id } = values;
    console.log('matchProps->', job_master_id, 'values->', job_interview_status_id);
    const sql = `
    UPDATE job_interview_master
    SET job_interview_status_id = ${job_interview_status_id}
    WHERE job_master_id = "${job_master_id}";
    `;
    console.log(sql);
    return sql;
};

export async function updateJobInterviewMaster(params: IUpdateJobInterviewMasterParams): Promise<string> {
    return updateJobInterviewMasterById(params);
}
