const webpackCommonFactory = require('./webpack.common');
const staticCommons = require('./commonChunks').staticCommons;
const proxy = require('./proxy');

/**
 * @param options {Object} - see required params in `webpackCommon.js`
 */
module.exports = (options) => {
    const webpackCommon = webpackCommonFactory(options);
    return Object.assign(webpackCommon, {
        devtool: 'source-map',
        devServer: {
            host: '0.0.0.0',
            port: 8080,
            contentBase: `${options.buildFolder}/`,
            historyApiFallback: true,
            proxy,
        },
        plugins: webpackCommon.plugins.concat([
            staticCommons(),
        ]),
    });
};
