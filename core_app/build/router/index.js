"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicRouter = void 0;
const job_interview_health_1 = require("../handlers/job_interview_health");
const api_job_interview_1 = require("../handlers/api_job_interview");
const api_job_interview__jobMasterId_1 = require("../handlers/api_job_interview_@jobMasterId");
const api_job_interview_details__jobMasterId_1 = require("../handlers/api_job_interview_details_@jobMasterId");
const api_type_job_interview_status_1 = require("../handlers/api_type_job_interview_status");
const api_job_interview_archive_card__jobMasterId_1 = require("../handlers/api_job_interview_archive_card_@jobMasterId");
const publicRouter = (fastify, _, done) => {
    fastify.get('/health', job_interview_health_1.checkHealth);
    fastify.get('/explorer/job_interview', api_job_interview_1.handlerGetJobInterview);
    fastify.get('/type_job_interview_status', api_type_job_interview_status_1.handlerGetTypeJobInterviewStatus);
    fastify.put('/job_interview/:job_master_id', api_job_interview__jobMasterId_1.handlerUpdateJobInterview);
    fastify.put('/job_interview/archive/:job_master_id', api_job_interview_archive_card__jobMasterId_1.handlerUpdateJobInterviewArchiveCard);
    fastify.get('/job_interview/detail/:job_master_id', api_job_interview_details__jobMasterId_1.handlerGetJobInterviewDetailById);
    done();
};
exports.publicRouter = publicRouter;
//# sourceMappingURL=index.js.map