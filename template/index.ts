import * as express from "express";
import * as log from 'great-logs';
import { configureRest, serverConfig, } from 'ts-site-starter';
import { AppRoutes } from './lib/app-routes';

/**
 * The server.
 * @class Server
 */
export class Server {

  public app: express.Application;

  /**
   * Constructor.
   * @class Server
   * @constructor
   */
  constructor() {
    //create expressjs application
    this.app = express();
    configureRest(this.app, express);
  }

  routeApp() {
    this.app.use((new AppRoutes('')).routes.router);
  }

  start() {
    this.routeApp();
    const port = serverConfig.getPort();
    this.app.listen(port, function () {
      log.info('port: %s', port);
    });
  }
}

// Start the application
new Server().start();