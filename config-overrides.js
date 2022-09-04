/* config-overrides.js */
const webpack = require('webpack');
module.exports = function override(config, env) {
    //do stuff with the webpack config...

    config.resolve.fallback = {
        "crypto": require.resolve('crypto-browserify'),
        "stream": require.resolve("stream-browserify"), 
        "assert": require.resolve("assert"), 
        "http": require.resolve("stream-http"), 
        "https": require.resolve("https-browserify"), 
        "os": require.resolve("os-browserify"), 
        "url": require.resolve("url"),
        "net":false,
        "fs":false
    };
    // config.plugins.push(
    //     new webpack.ProvidePlugin({
    //         process: 'process/browser',
    //         Buffer: ['buffer', 'Buffer'],
    //     }),
    // );

    
    return config;
}