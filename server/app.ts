'user strict';

console.log('Start Rest API');

import { Config } from './app//utils/config';

import { App } from './app/app';

import { Test } from './app/modules/test';

const CONFIG = new Config();

const app = new App(CONFIG.port);

/**
 * endpoint: './test'
 * param: name
 * return json: [{ name: [string] }]
 */
app.addPostEndpoint('test', Text);

app.listen();

module.exports = app;