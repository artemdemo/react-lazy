import React from 'react';
import { render } from 'react-dom';
import RouteProvider from './routes/RouteProvider';

import './styles/general.less';

import store from './store';
import history from './history';

render(
    <RouteProvider
        store={store}
        history={history} />,
    document.getElementById('app'),
);
