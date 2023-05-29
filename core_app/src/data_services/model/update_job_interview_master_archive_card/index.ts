import { type Static } from '@sinclair/typebox';
import { getJobInterviewMasterSchema } from '../get_job_interview_master';

export interface IFindJobInterviewMasterByIdMatchProps {
    job_master_id?: string;
}
export interface IUpdateJobInterviewMasterParams {
    matchProps: IFindJobInterviewMasterByIdMatchProps;
}

export type IUpdateJobInterviewMasterArchiveCardByIdResult = Static<typeof getJobInterviewMasterSchema>;

const updateJobInterviewMasterArchiveCardById = (params: IUpdateJobInterviewMasterParams): string => {
    const { matchProps } = params;
    const { job_master_id } = matchProps;

    const sql = `
    UPDATE job_interview_master
    SET is_active = 'n'
    WHERE job_master_id = "${job_master_id}";
    `;

    return sql;
};

export async function updateJobInterviewMasterArchiveCard(params: IUpdateJobInterviewMasterParams): Promise<string> {
    return updateJobInterviewMasterArchiveCardById(params);
}
