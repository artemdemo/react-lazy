import lazify from '../lazify';

export default lazify(() => System.import(/* webpackChunkName: "OrdersMap" */ './OrdersMap'));