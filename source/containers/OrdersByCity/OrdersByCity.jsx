import React from 'react';
import { createSelector } from 'reselect';

import './OrdersByCity.less';

const cities = [
    {name: 'New York', amount: 2100},
    {name: 'Tokyo', amount: 1450},
    {name: 'Moscow', amount: 5000},
    {name: 'Tel Aviv', amount: 3000},
];

const maxAmountSelector = createSelector(
    () => cities,
    (cities) => {
        const amountList = cities.map(item => item.amount);
        return Math.max(...amountList);
    },
);

const OrdersByCity = () => {
    const maxAmount = maxAmountSelector();

    return (
        <div>
            <h4>Orders By City</h4>
            <div className='orders-by-city'>
                {cities.map((city, index) => (
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

export default OrdersByCity;
