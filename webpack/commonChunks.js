const CommonsChunkPlugin = require('webpack').optimize.CommonsChunkPlugin;

const staticCommons = (prod = false) => {
    const filename = prod ? './js/common-[chunkhash].js' : './js/common.js';
    return new CommonsChunkPlugin({
        name: 'common',
        filename,
        minChunks(module, count) {
            const context = module.context;
            return context && context.indexOf('node_modules') >= 0;
        },
    });
};

module.exports = {
    staticCommons,
};
