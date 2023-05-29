import { type Static } from '@sinclair/typebox';
import { type FastifySchema } from 'fastify';
export declare const getJobInterviewListQuerySchema: import("@sinclair/typebox").TObject<{
    limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    offset: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
}>;
export type IRouteConfigGetJobInterviewList = CustomRouteShorthandOptionsWithHandler<{
    Querystring: Static<typeof getJobInterviewListQuerySchema>;
}>;
export declare const schema: FastifySchema;
//# sourceMappingURL=schema.d.ts.map