import { Type } from '@sinclair/typebox';
import type { RouteShorthandOptionsWithHandler, FastifySchema } from 'fastify';
import { getTypeJobInterviewStatusSchema } from '../../../data_services/model/get_type_job_interview_status';

export type IRouteConfigGetTypeJobInterviewStatus = RouteShorthandOptionsWithHandler;

export const schema: FastifySchema = {
    response: {
        200: Type.Object({
            data: Type.Array(getTypeJobInterviewStatusSchema),
        }),
    },
};
