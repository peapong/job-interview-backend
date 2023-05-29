import { taskGetTypeJobInterviewStatus } from './handler';
import { type IRouteConfigGetTypeJobInterviewStatus, schema } from './schema';

export const handlerGetTypeJobInterviewStatus: IRouteConfigGetTypeJobInterviewStatus = {
    schema,
    handler: taskGetTypeJobInterviewStatus,
};
