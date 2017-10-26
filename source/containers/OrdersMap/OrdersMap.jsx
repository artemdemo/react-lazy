import React from 'react';
import Icon from '../../components/Icon/Icon';

import './OrdersMap.less';

const markers = [
    {top: '10%', left: '15%'},
    {top: '13%', left: '20%'},
    {top: '83%', left: '10%'},
    {top: '60%', left: '90%'},
    {top: '50%', left: '50%'},
    {top: '20%', left: '70%'},
];

const OrdersMap = () => {
    return (
        <div className='last-orders'>
            <h4>Orders Map</h4>
            <div className='last-orders-map'>
                {markers.map((item, index) => (
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

export default OrdersMap;
