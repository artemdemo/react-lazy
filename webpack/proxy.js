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
                default:
                    return '/index.html';
            }
        },
    },
};
