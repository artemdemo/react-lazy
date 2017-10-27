import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import orders from './model/orders/ordersReducer';
import stores from './model/stores/storesReducer';

const reducers = combineReducers({
    orders,
    stores,
    routing: routerReducer,
});

export default reducers;
