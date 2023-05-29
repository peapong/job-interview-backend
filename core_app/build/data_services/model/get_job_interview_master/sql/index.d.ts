import { type Static } from '@sinclair/typebox';
import { type IJobInterviewMasterParams } from '..';
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
export declare const getAllJobInterviewMaster: (params: IJobInterviewMasterParams) => string;
//# sourceMappingURL=index.d.ts.map