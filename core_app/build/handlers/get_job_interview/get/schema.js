"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = exports.getJobInterviewListQuerySchema = void 0;
const typebox_1 = require("@sinclair/typebox");
const get_job_interview_master_1 = require("../../../data_services/model/get_job_interview_master");
exports.getJobInterviewListQuerySchema = typebox_1.Type.Object({
    limit: typebox_1.Type.Optional(typebox_1.Type.Integer({ exclusiveMinimum: 0 })),
    offset: typebox_1.Type.Optional(typebox_1.Type.Integer({ minimum: 0 })), // >= 0
});
exports.schema = {
    querystring: exports.getJobInterviewListQuerySchema,
    response: {
        200: typebox_1.Type.Object({
            data: typebox_1.Type.Array(get_job_interview_master_1.getJobInterviewMasterSchema),
        }),
    },
};
//# sourceMappingURL=schema.js.map