import type { FastifyInstance, FastifyPluginCallback } from 'fastify';

import { checkHealth } from '../handlers/job_interview_health';
import { handlerGetJobInterview } from '../handlers/api_job_interview';
import { handlerUpdateJobInterview } from '../handlers/api_job_interview_@jobMasterId';
import { handlerGetJobInterviewDetailById } from '../handlers/api_job_interview_details_@jobMasterId';
import { handlerGetTypeJobInterviewStatus } from '../handlers/api_type_job_interview_status';
import { handlerUpdateJobInterviewArchiveCard } from '../handlers/api_job_interview_archive_card_@jobMasterId';

const publicRouter: FastifyPluginCallback = (fastify: FastifyInstance, _, done) => {
    fastify.get('/health', checkHealth);
    // Get all data with limit and offset, to use show in card list.
    fastify.get('/explorer/job_interview', handlerGetJobInterview);
    // Get all type data, to use select status in front-end.
    fastify.get('/type_job_interview_status', handlerGetTypeJobInterviewStatus);
    // Update status user.
    fastify.put('/job_interview/:job_master_id', handlerUpdateJobInterview);
    // Update data to archive card user.
    fastify.put('/job_interview/archive/:job_master_id', handlerUpdateJobInterviewArchiveCard);
    // Get all data in user (job_master_id) to use data detail (Comment.) with limit and offset
    fastify.get('/job_interview/detail/:job_master_id', handlerGetJobInterviewDetailById);

    done();
};

export { publicRouter };
