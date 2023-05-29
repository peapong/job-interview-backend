import { type Static, Type } from '@sinclair/typebox';
import { type FastifySchema } from 'fastify';

export const updateJobInterviewReqParamsSchema = Type.Object({
    job_master_id: Type.String(),
});

export type IRouteConfigUpdateJobInterviewArchiveCardById = CustomRouteShorthandOptionsWithHandler<{
    Params: Static<typeof updateJobInterviewReqParamsSchema>;
}>;

export const schema: FastifySchema = {
    params: updateJobInterviewReqParamsSchema,
    response: {
        200: Type.Object({
            result: Type.Boolean(),
        }),
    },
};
