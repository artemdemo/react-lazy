import React from 'react';
import LastOrders from '../containers/LastOrders';
import OrdersMap from '../containers/OrdersMap';
import StoresIncome from '../containers/StoresIncome/StoresIncome';

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
            <div className='row'>
                <div className='col-md-4'>
                    Pie Chart
                </div>
                <div className='col-md-8'>
                    <StoresIncome />
                </div>
            </div>
        </div>
    );
};

export default DashboardView;
