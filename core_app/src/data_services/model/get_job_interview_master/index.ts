import { getAllJobInterviewMaster, type IGetAllJobInterviewMasterResult } from './sql';

export interface IFindJobInterviewMasterMatchProps {
    limit?: number;
    offset?: number;
}

export interface IJobInterviewMasterParams {
    matchProps: IFindJobInterviewMasterMatchProps;
}

export async function getJobInterviewMaster(params: IJobInterviewMasterParams): Promise<string> {
    return getAllJobInterviewMaster(params);
}
