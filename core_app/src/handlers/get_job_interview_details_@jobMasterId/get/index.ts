import { taskGetJobInterviewDetailById } from './handler';
import { type IRouteConfigGetJobInterviewDetailById, schema } from './schema';

export const handlerGetJobInterviewDetailById: IRouteConfigGetJobInterviewDetailById = {
    schema,
    handler: taskGetJobInterviewDetailById,
};
