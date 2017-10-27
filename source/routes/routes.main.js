import AppView from '../views/AppView';
import DashboardView from '../views/DashboardView';
import StoresView from '../views/StoresView';
import SingleStoreView from '../views/SingleStoreView';
import OrdersView from '../views/OrdersView';
import CmsView from '../views/CmsView';
import pathRedirect from './pathRedirect';

export const menu = [
    {
        name: 'Dashboard',
        link: '/',
    },
    {
        name: 'Orders',
        link: '/',
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
            component: DashboardView,
        },
        childRoutes: [
            {
                path: 'orders',
                component: OrdersView,
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
