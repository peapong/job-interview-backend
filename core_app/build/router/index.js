"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicRouter = void 0;
const job_interview_health_1 = require("../handlers/job_interview_health");
const get_job_interview_1 = require("../handlers/get_job_interview");
const publicRouter = (fastify, _, done) => {
    fastify.get('/health', job_interview_health_1.checkHealth);
    fastify.get('/explorer/job_interview', get_job_interview_1.handlerGetJobInterview);
    fastify.put('/job_interview/:job_master_id', get_job_interview_1.handlerUpdateJobInterview);
    done();
};
exports.publicRouter = publicRouter;
//# sourceMappingURL=index.js.map