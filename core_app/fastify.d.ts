import {
    type RouteShorthandOptionsWithHandler,
    type RawServerDefault,
    type RawRequestDefaultExpression,
    type RawReplyDefaultExpression,
    type RequestGenericInterface,
} from 'fastify';

declare global {
    export type CustomRouteShorthandOptionsWithHandler<TRequest extends RequestGenericInterface> =
        RouteShorthandOptionsWithHandler<
            RawServerDefault,
            RawRequestDefaultExpression<RawServerDefault>,
            RawReplyDefaultExpression<RawServerDefault>,
            TRequest
        >;
}
