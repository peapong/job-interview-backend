import { type Static, Type } from '@sinclair/typebox';
import type CustomRouteShorthandOptionsWithHandler from '../../../../fastify';
import { type FastifySchema } from 'fastify';
import { getJobInterviewMasterSchema } from '../../../data_services/model/get_job_interview_master';

export const getJobInterviewListQuerySchema = Type.Object({
    limit: Type.Optional(Type.Integer({ exclusiveMinimum: 0 })), // > 0
    offset: Type.Optional(Type.Integer({ minimum: 0 })), // >= 0
});

export type IRouteConfigGetJobInterviewList = CustomRouteShorthandOptionsWithHandler<{
    Querystring: Static<typeof getJobInterviewListQuerySchema>;
}>;

export const schema: FastifySchema = {
    querystring: getJobInterviewListQuerySchema,
    response: {
        200: Type.Object({
            data: Type.Array(getJobInterviewMasterSchema),
        }),
    },
};
