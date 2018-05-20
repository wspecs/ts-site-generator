#!/usr/bin/name node

const generator = require('../dist/index');
const program = require('commander');
const fs = require('fs');

program
  .version('0.0.1')
  .command('[name]', 'name of the TS module to generate.')
  .option('-f, --folder [folder]s', 'absolute path for the new TS module')
  .option('-c, --config <config>', 'Path for the config file')
  .action((name, options) => {
    let config;
    let folder = options.folder;
    if (options.config) {
      config = JSON.parse(fs.readFileSync(options.config, 'utf8'));
      generator.generate(name, folder, config);
    } else {
      generator.generate(name, folder);
    }
  });

program.parse(process.argv);