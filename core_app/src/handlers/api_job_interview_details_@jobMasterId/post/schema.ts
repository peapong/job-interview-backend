import { type Static, Type } from '@sinclair/typebox';
import { type FastifySchema } from 'fastify';

export const createJobInterviewDetailReqParamsSchema = Type.Object({
    job_master_id: Type.String(),
});

export const createJobInterviewDetailReqBodySchema = Type.Object({
    title_comment_user_name: Type.String(),
    body_comment: Type.String(),
});

export type IRouteConfigCreateJobInterviewDetailById = CustomRouteShorthandOptionsWithHandler<{
    Body: Static<typeof createJobInterviewDetailReqBodySchema>;
    Params: Static<typeof createJobInterviewDetailReqParamsSchema>;
}>;

export const schema: FastifySchema = {
    body: createJobInterviewDetailReqBodySchema,
    params: createJobInterviewDetailReqParamsSchema,
    response: {
        200: Type.Object({
            result: Type.Boolean(),
        }),
    },
};
