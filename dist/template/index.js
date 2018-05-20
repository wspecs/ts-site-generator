"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var log = require("great-logs");
var ts_site_starter_1 = require("ts-site-starter");
var app_routes_1 = require("./lib/app-routes");
/**
 * The server.
 * @class Server
 */
var Server = /** @class */ (function () {
    /**
     * Constructor.
     * @class Server
     * @constructor
     */
    function Server() {
        //create expressjs application
        this.app = express();
        ts_site_starter_1.configureRest(this.app, express);
    }
    Server.prototype.routeApp = function () {
        this.app.use((new app_routes_1.AppRoutes('')).routes.router);
    };
    Server.prototype.start = function () {
        this.routeApp();
        var port = ts_site_starter_1.serverConfig.getPort();
        this.app.listen(port, function () {
            log.info('port: %s', port);
        });
    };
    return Server;
}());
exports.Server = Server;
// Start the application
new Server().start();
