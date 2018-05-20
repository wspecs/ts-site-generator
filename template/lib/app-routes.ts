import {BasicRoutes, AppResponse} from 'ts-site-starter';
import {Request, Response} from 'express';

export class AppRoutes {
  public routes: BasicRoutes;

  constructor(basePath: string) {
    this.routes = new BasicRoutes(basePath);
    this.addRoutes();
  }

  homePage(req: Request, res: AppResponse) {
    res.serve('home', {});
  }

  addRoutes() {
    this.routes.router.get('/', this.homePage.bind(this));
  }
}