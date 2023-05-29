import { taskUpdateJobInterviewById } from './handler';
import { type IRouteConfigUpdateJobInterviewById, schema } from './schema';

export const handlerUpdateJobInterview: IRouteConfigUpdateJobInterviewById = {
    schema,
    handler: taskUpdateJobInterviewById,
};
