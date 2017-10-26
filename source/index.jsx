import React from 'react';
import 'babel-polyfill';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import IndexRoute from 'react-router/lib/IndexRoute';
import Route from 'react-router/lib/Route';
import Router from 'react-router/lib/Router';

import './styles/general.less';

import history from './history';
import store from './store';

import AppView from './views/AppView';
import DashboardView from './views/DashboardView';
import StoresView from './views/StoresView';
import SingleStoreView from './views/SingleStoreView';
import OrdersView from './views/OrdersView';
import CmsView from './views/CmsView';

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path='/' component={AppView}>
                <IndexRoute component={DashboardView} />
                <Route path='orders' component={OrdersView} />
                <Route path='stores' component={StoresView}>
                    <Route path=':storeId' component={SingleStoreView} />
                </Route>
                <Route path='cms' component={CmsView} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app'),
);
