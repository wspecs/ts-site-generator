"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts_site_starter_1 = require("ts-site-starter");
var AppRoutes = /** @class */ (function () {
    function AppRoutes(basePath) {
        this.routes = new ts_site_starter_1.BasicRoutes(basePath);
        this.addRoutes();
    }
    AppRoutes.prototype.homePage = function (req, res) {
        res.serve('home', {});
    };
    AppRoutes.prototype.addRoutes = function () {
        this.routes.router.get('/', this.homePage.bind(this));
    };
    return AppRoutes;
}());
exports.AppRoutes = AppRoutes;
