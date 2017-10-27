import AppView from '../views/AppView';
import StoresView from '../views/StoresView';
import SingleStoreView from '../views/SingleStoreView';
import CmsView from '../views/CmsView';
import pathRedirect from './pathRedirect';

export const menu = [
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
        component: AppView,
        indexRoute: {
            getComponent: (nextState, cb) => {
                System.import(/* webpackChunkName: "DashboardView" */'../views/DashboardView')
                    .then((response) => {
                        cb(null, response.default);
                    });
            },
        },
        childRoutes: [
            {
                path: 'orders',
                getComponent: (nextState, cb) => {
                    System.import(/* webpackChunkName: "OrdersView" */'../views/OrdersView')
                        .then((response) => {
                            cb(null, response.default);
                        });
                },
            },
            {
                path: 'stores',
                component: StoresView,
                childRoutes: [
                    {
                        path: ':storeId',
                        component: SingleStoreView,
                    },
                ],
            },
            {
                path: 'cms',

                component: CmsView,
            },
            {
                path: '*',
                indexRoute: pathRedirect(),
            },
        ],
    },
];

export default routes;
