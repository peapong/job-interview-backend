import type { FastifyInstance, FastifyPluginCallback } from 'fastify';

import { checkHealth } from '../handlers/job_interview_health';
import { handlerGetJobInterview } from '../handlers/get_job_interview';

const publicRouter: FastifyPluginCallback = (fastify: FastifyInstance, _, done) => {
    fastify.get('/health', checkHealth);
    fastify.get('/explorer/job_interview', handlerGetJobInterview);

    done();
};

export { publicRouter };
