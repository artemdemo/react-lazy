/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import LastOrders from '../containers/LastOrders/LastOrder.async';
import OrdersMap from '../containers/OrdersMap/OrdersMap.async';
import StoresIncome from '../containers/StoresIncome/StoresIncome.async';
import OrdersByCity from '../containers/OrdersByCity/OrdersByCity.async';

class DashboardView extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
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
                        <OrdersByCity>
                            Custom loading ....
                        </OrdersByCity>
                    </div>
                    <div className='col-md-8'>
                        <StoresIncome />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default DashboardView;
