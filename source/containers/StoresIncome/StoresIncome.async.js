import lazify from '../lazify';

export default lazify(() => import(/* webpackChunkName: "<StoresIncome />" */ './StoresIncome'));
