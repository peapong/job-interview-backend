import type { FastifyInstance, FastifyPluginCallback } from 'fastify';

import { checkHealth } from '../handlers/job_interview_health';
import { handlerGetJobInterview } from '../handlers/get_job_interview';
import { handlerUpdateJobInterview } from '../handlers/get_job_interview_@jobMasterId';
import { handlerGetJobInterviewDetailById } from '../handlers/get_job_interview_details_@jobMasterId';

const publicRouter: FastifyPluginCallback = (fastify: FastifyInstance, _, done) => {
    fastify.get('/health', checkHealth);
    fastify.get('/explorer/job_interview', handlerGetJobInterview);
    fastify.put('/job_interview/:job_master_id', handlerUpdateJobInterview);
    fastify.get('/job_interview/detail/:job_master_id', handlerGetJobInterviewDetailById);

    done();
};

export { publicRouter };
