import AppView from '../views/AppView';
import DashboardView from '../views/DashboardView';
import OrdersView from '../views/OrdersView';

export const menu = [
    {
        name: 'Dashboard',
        link: '/',
    },
    {
        name: 'Orders',
        link: '/',
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
        ],
    },
];

export default routes;
