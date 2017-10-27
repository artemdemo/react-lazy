import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Router from 'react-router/lib/Router';
import { requestConfigs } from '../model/envConfigs/envConfigsSagas';

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
        requestConfigs().then((configs) => {
            this.loadRoutes(configs.ROUTING);
        });
    }

    loadRoutes(routingMap) {
        System.import(/* webpackChunkName: "route." */ `./routes.${routingMap}`)
            .then(result => this.setState({
                routes: result.default,
            }))
            .catch((err) => {
                const routingMapList = routingMap.split('.');
                if (routingMapList.length > 1) {
                    this.loadRoutes(routingMapList.slice(0, -1).join('.'));
                } else {
                    console.error('Dynamic ROUTING loading failed', err);
                }
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
