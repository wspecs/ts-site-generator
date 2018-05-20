"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
var log = require("great-logs");
var shell = require('shelljs');
var replace = require('replace');
// path for the tsm starter files used to generate module.
exports.TEMPLATE_FOLDER = path_1.join(__dirname, '/../../template');
function generate(name, folder, config) {
    if (folder === undefined) {
        folder = "./" + name;
    }
    if (fs_1.existsSync(folder)) {
        throw new Error(folder + " already exists.");
    }
    log.info('creating folder %s', folder);
    shell.exec("mkdir -p " + folder);
    log.info('copying templates into new folder');
    shell.exec("cp -r " + exports.TEMPLATE_FOLDER + "/** " + folder);
    shell.exec("cd " + folder);
    log.info('installing npm packages');
    shell.exec("npm install");
    if (config !== undefined) {
        log.info('Config content');
        log.data(config);
        var replacements = [
            { original: 'tsm.repository', replacement: config.repository },
            { original: 'tsm.name', replacement: config.name },
            { original: 'tsm.author.name', replacement: config.author.name },
            { original: 'tsm.author.email', replacement: config.author.email },
            { original: 'tsm.author.url', replacement: config.author.url }
        ];
        for (var _i = 0, replacements_1 = replacements; _i < replacements_1.length; _i++) {
            var rep = replacements_1[_i];
            log.info('replacing %s %s', rep.original, rep.replacement);
            replace({
                regex: rep.original,
                replacement: rep.replacement,
                paths: [folder + "/."],
                recursive: true,
            });
        }
    }
}
exports.generate = generate;
