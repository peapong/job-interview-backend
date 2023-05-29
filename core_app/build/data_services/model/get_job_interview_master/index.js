"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJobInterviewMaster = exports.getJobInterviewMasterSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
// Define the schema for the response data
exports.getJobInterviewMasterSchema = typebox_1.Type.Object({
    job_master_id: typebox_1.Type.String(),
    job_interview_status_id: typebox_1.Type.Integer(),
    title_create_user_name: typebox_1.Type.String(),
    email: typebox_1.Type.String(),
    body_description: typebox_1.Type.String(),
    is_active: typebox_1.Type.Union([typebox_1.Type.Literal('n'), typebox_1.Type.Literal('y')]),
    created_at: typebox_1.Type.String({ format: 'date-time' }),
    job_status_name: typebox_1.Type.String(),
});
const getAllJobInterviewMaster = (params) => {
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
async function getJobInterviewMaster(params) {
    return getAllJobInterviewMaster(params);
}
exports.getJobInterviewMaster = getJobInterviewMaster;
//# sourceMappingURL=index.js.map