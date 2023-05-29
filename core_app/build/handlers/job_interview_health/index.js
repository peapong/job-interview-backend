"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkHealth = void 0;
const checkHealth = async (_req, res) => {
    res.status(200).send({
        message: `hello world @ ${new Date().toString()}`,
        env: process.env.NODE_ENV,
        version: process.env.PACKAGE_VERSION,
    });
};
exports.checkHealth = checkHealth;
//# sourceMappingURL=index.js.map