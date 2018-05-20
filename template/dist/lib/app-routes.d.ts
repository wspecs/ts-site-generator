/// <reference types="express" />
import { BasicRoutes, AppResponse } from 'ts-site-starter';
import { Request } from 'express';
export declare class AppRoutes {
    routes: BasicRoutes;
    constructor(basePath: string);
    homePage(req: Request, res: AppResponse): void;
    addRoutes(): void;
}
