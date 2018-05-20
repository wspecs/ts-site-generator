import {existsSync, readFileSync, exists} from 'fs';
import {join} from 'path';
import * as log from 'great-logs';
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';
const shell = require('shelljs'); 
const replace = require('replace');

// path for the tsm starter files used to generate module.
export const TEMPLATE_FOLDER = join(__dirname, '/../../template');

export interface TsmConfig {
  name: string;
  destination: string;
  author: {
    name: string;
    email: string;
    url: string;
  };
  repository: string;
  help?: boolean;
}

export function generate(name: string, folder?: string, config?: TsmConfig) {
  if (folder === undefined) {
    folder = `./${name}`;
  }
  if (existsSync(folder)) {
    throw new Error(`${folder} already exists.`);
  }

  log.info('creating folder %s', folder);
  shell.exec(`mkdir -p ${folder}`);

  log.info('copying templates into new folder');
  shell.exec(`cp -r ${TEMPLATE_FOLDER}/** ${folder}`);

  shell.exec(`cd ${folder}`);
  log.info('installing npm packages');
  shell.exec(`npm install`);

  if (config !== undefined) {
    log.info('Config content');
    log.data(config);
    const replacements = [
      {original: 'tsm.repository', replacement: config.repository},
      {original: 'tsm.name', replacement: config.name},
      {original: 'tsm.author.name', replacement: config.author.name},
      {original: 'tsm.author.email', replacement: config.author.email},
      {original: 'tsm.author.url', replacement: config.author.url}
    ];
  
    for (const rep of replacements) {
      log.info('replacing %s %s', rep.original, rep.replacement);
      replace({
        regex: rep.original,
        replacement: rep.replacement,
        paths: [`${folder}/.`],
        recursive: true,
      });
    }
  }
}
