import { type Static, Type } from '@sinclair/typebox';
import { type FastifySchema } from 'fastify';
import { getJobInterviewDetailSchema } from '../../../data_services/model/get_job_interview_detail';

export const getJobInterviewDetailByIdQuerySchema = Type.Object({
    limit: Type.Optional(Type.Integer({ exclusiveMinimum: 0 })), // > 0
    offset: Type.Optional(Type.Integer({ minimum: 0 })), // >= 0
});

export const getJobInterviewDetailByIdReqParamsSchema = Type.Object({
    job_master_id: Type.String(),
});

export type IRouteConfigGetJobInterviewDetailById = CustomRouteShorthandOptionsWithHandler<{
    Querystring: Static<typeof getJobInterviewDetailByIdQuerySchema>;
    Params: Static<typeof getJobInterviewDetailByIdReqParamsSchema>;
}>;

export const schema: FastifySchema = {
    querystring: getJobInterviewDetailByIdQuerySchema,
    params: getJobInterviewDetailByIdReqParamsSchema,
    response: {
        200: Type.Object({
            data: Type.Array(getJobInterviewDetailSchema),
        }),
    },
};
