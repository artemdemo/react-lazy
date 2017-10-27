import React from 'react';
import { connect } from 'react-redux';
import Icon from '../../components/Icon/Icon';

import './OrdersMap.less';

const OrdersMap = (props) => {
    const { orders } = props;

    return (
        <div className='last-orders'>
            <h4>Orders Map</h4>
            <div className='last-orders-map'>
                {orders.data.map((item, index) => (
                    <Icon
                        className='last-orders-map__marker'
                        style={{
                            top: item.top,
                            left: item.left,
                        }}
                        name='map-marker'
                        key={`last-orders-map__marker_${index}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default connect(
    state => ({
        orders: state.orders,
    }),
)(OrdersMap);
