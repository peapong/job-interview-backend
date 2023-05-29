import { taskUpdateJobInterviewArchiveCardById } from './handler';
import { type IRouteConfigUpdateJobInterviewArchiveCardById, schema } from './schema';

export const handlerUpdateJobInterviewArchiveCard: IRouteConfigUpdateJobInterviewArchiveCardById = {
    schema,
    handler: taskUpdateJobInterviewArchiveCardById,
};
