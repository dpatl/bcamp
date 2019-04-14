'use strict';

var util = require('util');
var resolve = require('resolve');
var chalk = require('chalk');
var tildify = require('tildify');
var cwd = require('cwd')();

module.exports = function(name) {
  var module = resolve.sync(name, {basedir: cwd});
  if(!module) {
    console.log(chalk.red('Local module "%s" not found in', name), chalk.magenta(tildify(cwd)));
    console.log(chalk.red('Try running: npm install "%s" --save-dev', name));
    process.exit(1);
  }
  return require(module);
};
