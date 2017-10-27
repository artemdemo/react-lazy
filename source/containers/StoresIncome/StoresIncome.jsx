import React from 'react';
import { createSelector } from 'reselect';

import './StoresIncome.less';

const storesIncome = [
    {name: 'Store #1', 'in': 2000},
    {name: 'Store #2', 'in': 3000},
    {name: 'Store #3', 'in': 4740},
    {name: 'Store #4', 'in': 1990},
    {name: 'Store #5', 'in': 800},
];

const StoresIncome = () => {
    const maxIncomeSelector = createSelector(
        () => storesIncome,
        (storesIncome) => {
            const incomes = storesIncome.map(item => item.in);
            return Math.max(...incomes);
        },
    );

    const maxIncome = maxIncomeSelector();

    return (
        <div>
            <h4>Stores Income</h4>
            <div className='stores-income'>
                {storesIncome.map((store, index) => {
                    const incomePercent = (store.in / maxIncome) * 100;
                    return (
                        <div
                            className='stores-income-item'
                            key={`stores-income-item-${index}`}
                        >
                            <div className='stores-income-item-charts'>
                                <div
                                    style={{
                                        height: `${incomePercent}%`,
                                    }}
                                    className='stores-income-item-charts__column' />
                                <div
                                    style={{
                                        top: `${100 - incomePercent}%`,
                                    }}
                                    className='stores-income-item-charts__income'>
                                    {store.in}
                                </div>
                            </div>
                            <div className='stores-income-item__name'>
                                {store.name}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default StoresIncome;
