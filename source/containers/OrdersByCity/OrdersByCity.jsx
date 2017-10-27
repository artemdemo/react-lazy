import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import './OrdersByCity.less';

const maxAmountSelector = createSelector(
    props => props.stores.byCity,
    (cities) => {
        const amountList = cities.map(item => item.amount);
        return Math.max(...amountList);
    },
);

const OrdersByCity = (props) => {
    const { stores } = props;
    const maxAmount = maxAmountSelector(props);

    return (
        <div>
            <h4>Orders By City</h4>
            <div className='orders-by-city'>
                {stores.byCity.map((city, index) => (
                    <div
                        key={`orders-by-city-item-${index}`}
                        style={{
                            width: `${(city.amount / maxAmount) * 100}%`,
                        }}
                        className='orders-by-city-item'>
                        {city.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default connect(
    state => ({
        stores: state.stores,
    }),
)(OrdersByCity);
