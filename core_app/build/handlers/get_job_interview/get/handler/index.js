"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskGetJobInterview = void 0;
const utils_1 = require("../../../../utils");
const get_job_interview_master_1 = require("../../../../data_services/model/get_job_interview_master");
const taskGetJobInterview = async (req, res) => {
    const { query: reqQuery } = req;
    try {
        const result = await utils_1.mysqlConfig.promise().query(await (0, get_job_interview_master_1.getJobInterviewMaster)({
            matchProps: {
                limit: reqQuery.limit,
                offset: reqQuery.offset,
            },
        }));
        res.status(200).send({
            data: result[0],
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({
            error: 'An error occurred while fetching job interviews.',
        });
    }
};
exports.taskGetJobInterview = taskGetJobInterview;
//# sourceMappingURL=index.js.map