import type { RouteHandler } from 'fastify';

export const checkHealth: RouteHandler = async (_req, res) => {
    res.status(200).send({
        message: `hello world @ ${new Date().toString()}`,
        env: process.env.NODE_ENV,
        version: process.env.PACKAGE_VERSION,
    });
};
