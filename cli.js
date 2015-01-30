#!/usr/bin/env node

var getRandomPort = require('./.');

getRandomPort().done(console.log);
