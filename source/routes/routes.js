const menu = [
    {
        name: 'Dashboard',
        link: '/',
    },
    {
        name: 'Orders',
        link: '/orders',
    },
    {
        name: 'Stores',
        children: [
            {
                name: 'All',
                link: '/stores/all',
            },
            {
                name: 'New York',
                link: '/stores/new-york',
            },
            {
                name: 'Tel Aviv',
                link: '/stores/tel-aviv',
            },
            {
                name: 'Tokyo',
                link: '/stores/tokyo',
            },
        ],
    },
    {
        name: 'CMS',
        link: '/cms',
    },
];

const routes = [
    {
        path: '/',
        _component: 'AppView',
        indexRoute: {
            _component: 'DashboardView',
        },
        childRoutes: [
            {
                path: 'orders',
                _component: 'OrdersView',
            },
            {
                path: 'stores',
                _component: 'StoresView',
                childRoutes: [
                    {
                        path: ':storeId',
                        _component: 'SingleStoreView',
                    },
                ],
            },
            {
                path: 'cms',
                _component: 'CmsView',
            },
            {
                path: '*',
                _redirect: true,
            },
        ],
    },
];

module.exports = {
    menu,
    routes,
};
