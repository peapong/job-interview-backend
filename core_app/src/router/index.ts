import type { FastifyInstance, FastifyPluginCallback } from 'fastify';

import { checkHealth } from '../handlers/job_interview_health';
import { handlerGetJobInterview, handlerUpdateJobInterview } from '../handlers/get_job_interview';

const publicRouter: FastifyPluginCallback = (fastify: FastifyInstance, _, done) => {
    fastify.get('/health', checkHealth);
    fastify.get('/explorer/job_interview', handlerGetJobInterview);
    fastify.put('/job_interview/:job_master_id', handlerUpdateJobInterview);

    done();
};

export { publicRouter };
