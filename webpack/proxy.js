const routes = require('../source/routes/routes');

const envConfigs = {
    ROUTING: 'main',
};

module.exports = {
    '**/**': {
        secure: false,
        changeOrigin: true,
        bypass: (req, res) => {
            switch (true) {
                case req.url === '/api/envConfigs' && req.method === 'GET':
                    res.json(envConfigs);
                    return envConfigs;
                case req.url === '/api/routes' && req.method === 'GET':
                    res.json(routes);
                    return routes;
                default:
                    return '/index.html';
            }
        },
    },
};
