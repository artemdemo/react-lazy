import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Router from 'react-router/lib/Router';
import pathRedirect from './pathRedirect';
import { requestRoutes } from '../model/routes/routesSagas';

/**
 * Asynchronous router provider
 */
class RouteProvider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            routes: null,
        };
    }

    componentDidMount() {
        requestRoutes().then((result) => {
            this.loadRoutes(result.routes);
        });
    }

    loadRoutes(routes) {
        const loadComponent = componentName => new Promise((resolve) => {
            return import(/* webpackChunkName: "view/[request]" */`../views/${componentName}`)
                .then((response) => {
                    resolve(response.default);
                });
        });

        const processChildren = (children) => {
            return children.map((item) => {
                const result = (() => {
                    if (item._component) {
                        return Object.assign(item, {
                            getComponent: (nextState, cb) => {
                                loadComponent(item._component)
                                    .then(component => cb(null, component));
                            },
                        });
                    }
                    if (item._redirect) {
                        return Object.assign(item, {
                            indexRoute: pathRedirect(),
                        });
                    }
                    return item;
                })();
                if (item.indexRoute) {
                    result.indexRoute = Object.assign(item.indexRoute, {
                        getComponent: (nextState, cb) => {
                            loadComponent(item.indexRoute._component)
                                .then(component => cb(null, component));
                        },
                    });
                }
                if (item.childRoutes) {
                    result.childRoutes = processChildren(item.childRoutes);
                }
                return result;
            });
        };
        this.setState({
            routes: processChildren(routes),
        });
    }

    render() {
        const { store, history } = this.props;
        if (this.state.routes) {
            return (
                <Provider store={store}>
                    <Router routes={this.state.routes} history={history} />
                </Provider>
            );
        }
        return null;
    }
}

RouteProvider.propTypes = {
    store: PropTypes.shape({}).isRequired,
    history: PropTypes.shape({}).isRequired,
};

export default RouteProvider;
