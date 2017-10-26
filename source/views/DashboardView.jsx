import React from 'react';
import LastOrders from '../containers/LastOrders';
import OrdersMap from '../containers/OrdersMap';

const DashboardView = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-md-4'>
                    <LastOrders />
                </div>
                <div className='col-md-8'>
                    <OrdersMap />
                </div>
            </div>
        </div>
    );
};

export default DashboardView;
