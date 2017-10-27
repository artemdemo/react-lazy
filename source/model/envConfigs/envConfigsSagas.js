import request from 'superagent-bluebird-promise';
import config from '../../config';

let configsPromise = null;

export const requestConfigs = () => {
    if (!configsPromise) {
        configsPromise = request
            .get(`${config.publicPath}/api/envConfigs`)
            .promise()
            .then(configResult => configResult.body);
    }
    return configsPromise;
};
