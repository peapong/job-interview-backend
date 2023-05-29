"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const fastify_1 = __importDefault(require("fastify"));
const router_1 = require("./router");
const app = (0, fastify_1.default)({
    logger: true,
});
exports.app = app;
app.register(Promise.resolve().then(() => __importStar(require('@fastify/sensible'))));
app.register(Promise.resolve().then(() => __importStar(require('@fastify/cors'))), {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    preflight: true,
});
app.register(Promise.resolve().then(() => __importStar(require('@fastify/swagger'))));
app.get('/', async (request, reply) => {
    return 'Hello there! 👋';
});
// // Multiple parameters within same couple of slash "/"
// // e.g. /example/100-500 -> prints 100 and 500
app.get('/example/:lat-:lon', (req, reply) => {
    console.log(req.params);
    console.log(req.params);
    return { msg: 'success' };
});
// public route
app.register((instance, _, done) => {
    instance.decorateRequest('systemConfig', null);
    instance.addHook('onRoute', (routeOptions) => {
        console.log(`Registered route: ${routeOptions.url}`);
    });
    instance.register(router_1.publicRouter);
    done();
});
app.ready((err) => {
    if (err)
        throw err;
    app.swagger();
});
// // Run the server!
app.listen({ port: 8080 }, (err, address) => {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
    app.log.info(`Started server at ${address}`);
    console.log(`Started server at ${address}`);
});
//# sourceMappingURL=index.js.map