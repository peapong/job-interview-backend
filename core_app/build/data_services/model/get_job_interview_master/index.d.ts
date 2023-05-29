import { type Static } from '@sinclair/typebox';
export interface IFindJobInterviewMasterMatchProps {
    limit?: number;
    offset?: number;
}
export interface IJobInterviewMasterParams {
    matchProps: IFindJobInterviewMasterMatchProps;
}
export declare const getJobInterviewMasterSchema: import("@sinclair/typebox").TObject<{
    job_master_id: import("@sinclair/typebox").TString;
    job_interview_status_id: import("@sinclair/typebox").TInteger;
    title_create_user_name: import("@sinclair/typebox").TString;
    email: import("@sinclair/typebox").TString;
    body_description: import("@sinclair/typebox").TString;
    is_active: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"n">, import("@sinclair/typebox").TLiteral<"y">]>;
    created_at: import("@sinclair/typebox").TString;
    job_status_name: import("@sinclair/typebox").TString;
}>;
export type IGetAllJobInterviewMasterResult = Static<typeof getJobInterviewMasterSchema>;
export declare function getJobInterviewMaster(params: IJobInterviewMasterParams): Promise<string>;
//# sourceMappingURL=index.d.ts.map