'use strict';

const Arrow = require('arrowjs');
process.env.NODE_ENV = 'production'
const application = new Arrow();
application.start({
    passport: true,
    role: true
});