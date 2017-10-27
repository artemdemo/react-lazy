const envConfigs = {
    ROUTING: 'main',
};

const routes = [
    {
        path: '/',
        component: 'AppView',
        indexRoute: {
            component: 'DashboardView',
        },
        childRoutes: [
            {
                path: 'orders',
                component: 'OrdersView',
            },
            {
                path: 'stores',
                component: 'StoresView',
                childRoutes: [
                    {
                        path: ':storeId',
                        component: 'SingleStoreView',
                    },
                ],
            },
            {
                path: 'cms',
                component: 'CmsView',
            },
        ],
    },
];

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
