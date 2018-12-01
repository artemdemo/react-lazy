import React from 'react';
import LastOrders from '../containers/LastOrders/LastOrder.async';
import OrdersMap from '../containers/OrdersMap/OrdersMap.async';
import StoresIncome from '../containers/StoresIncome/StoresIncome.async';
import OrdersByCity from '../containers/OrdersByCity/OrdersByCity.async';

class DashboardView extends React.Component {
    renderLastOrders() {
        return (
            <LastOrders />
        );
    }

    renderOrdersMap() {
        return (
            <OrdersMap />
        );
    }

    renderOrdersByCity() {
        return (
            <OrdersByCity>
                Custom loading ....
            </OrdersByCity>
        );
    }

    renderStoresIncome() {
        return (
            <StoresIncome />
        );
    }

    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col-md-4'>
                        {this.renderLastOrders()}
                    </div>
                    <div className='col-md-8'>
                        {this.renderOrdersMap()}
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        {this.renderOrdersByCity()}
                    </div>
                    <div className='col-md-8'>
                        {this.renderStoresIncome()}
                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardView;
