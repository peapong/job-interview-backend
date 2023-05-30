import fastify, { type FastifyInstance } from 'fastify';

import { publicRouter } from './router';

const app: FastifyInstance = fastify({
    logger: true,
});

app.register(import('@fastify/sensible'));

app.register(import('@fastify/cors'), {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    preflight: true,
});

app.register(import('@fastify/swagger'));

app.get('/', async (request, reply) => {
    return 'Hello there! 👋';
});

// public route
app.register((instance, _, done) => {
    instance.decorateRequest('systemConfig', null);
    instance.addHook('onRoute', (routeOptions) => {
        console.log(`Registered route: ${routeOptions.url}`);
    });
    instance.register(publicRouter);

    done();
});

app.ready((err) => {
    if (err) throw err;
    app.swagger();
});

// // Run the server!
app.listen({ host: '0.0.0.0', port: 4000 }, (err, address) => {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
    app.log.info(`Started server at ${address}`);
    console.log(`Started server at ${address}`);
});

export { app };
