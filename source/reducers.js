import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import stores from './model/stores/storesReducer';

const reducers = combineReducers({
    stores,
    routing: routerReducer,
});

export default reducers;
