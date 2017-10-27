import request from 'superagent-bluebird-promise';
import config from '../../config';

let routesPromise = null;

export const requestRoutes = () => {
    if (!routesPromise) {
        routesPromise = request
            .get(`${config.publicPath}/api/routes`)
            .promise()
            .then(routesResult => routesResult.body);
    }
    return routesPromise;
};
