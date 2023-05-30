import { taskCreateJobInterviewDetailById } from './handler';
import { type IRouteConfigCreateJobInterviewDetailById, schema } from './schema';

export const handlerCreateJobInterviewDetailById: IRouteConfigCreateJobInterviewDetailById = {
    schema,
    handler: taskCreateJobInterviewDetailById,
};
