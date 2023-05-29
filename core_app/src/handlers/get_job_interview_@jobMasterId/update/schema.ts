import { type Static, Type } from '@sinclair/typebox';
import { type FastifySchema } from 'fastify';

export const updateJobInterviewReqParamsSchema = Type.Object({
    job_master_id: Type.String(),
});

export const updateJobInterviewReqBodySchema = Type.Object({
    job_interview_status_id: Type.Number(),
});

export type IRouteConfigUpdateJobInterviewById = CustomRouteShorthandOptionsWithHandler<{
    Body: Static<typeof updateJobInterviewReqBodySchema>;
    Params: Static<typeof updateJobInterviewReqParamsSchema>;
}>;

export const schema: FastifySchema = {
    body: updateJobInterviewReqBodySchema,
    params: updateJobInterviewReqParamsSchema,
    response: {
        200: Type.Object({
            result: Type.Boolean(),
        }),
    },
};
