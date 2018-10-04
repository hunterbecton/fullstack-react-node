if (process.env.NODE_ENV === 'production') {
    // We are in production, return prod keys
    modeule.exports = require('./prod');
} else {
    // We are in development, return dev keys
    module.exports = require('./dev');
}