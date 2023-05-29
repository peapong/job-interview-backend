import type { FastifyInstance, FastifyPluginCallback } from 'fastify';

import { checkHealth } from '../handlers/job_interview_health';
import { handlerGetJobInterview } from '../handlers/api_job_interview';
import { handlerUpdateJobInterview } from '../handlers/api_job_interview_@jobMasterId';
import { handlerGetJobInterviewDetailById } from '../handlers/api_job_interview_details_@jobMasterId';
import { handlerGetTypeJobInterviewStatus } from '../handlers/api_type_job_interview_status';

const publicRouter: FastifyPluginCallback = (fastify: FastifyInstance, _, done) => {
    fastify.get('/health', checkHealth);
    fastify.get('/explorer/job_interview', handlerGetJobInterview);
    fastify.get('/type_job_interview_status', handlerGetTypeJobInterviewStatus);
    fastify.put('/job_interview/:job_master_id', handlerUpdateJobInterview);
    fastify.get('/job_interview/detail/:job_master_id', handlerGetJobInterviewDetailById);

    done();
};

export { publicRouter };
