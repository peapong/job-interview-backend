import { taskGetJobInterview } from './handler';
import { type IRouteConfigGetJobInterviewList, schema } from './schema';

export const handlerGetJobInterview: IRouteConfigGetJobInterviewList = {
    schema,
    handler: taskGetJobInterview,
};
