/// <reference types="express" />
import * as express from "express";
/**
 * The server.
 * @class Server
 */
export declare class Server {
    app: express.Application;
    /**
     * Constructor.
     * @class Server
     * @constructor
     */
    constructor();
    routeApp(): void;
    start(): void;
}
