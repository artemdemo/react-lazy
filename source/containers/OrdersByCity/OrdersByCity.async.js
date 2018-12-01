import lazify from '../lazify';

export default lazify(() => import(/* webpackChunkName: "<OrdersByCity />" */ './OrdersByCity'));
