"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJobInterviewMaster = void 0;
const sql_1 = require("./sql");
async function getJobInterviewMaster(params) {
    return (0, sql_1.getAllJobInterviewMaster)(params);
}
exports.getJobInterviewMaster = getJobInterviewMaster;
//# sourceMappingURL=index.js.map