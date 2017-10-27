import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import './StoresIncome.less';

const maxIncomeSelector = createSelector(
    props => props.stores.byIncome,
    (storesIncome) => {
        const incomes = storesIncome.map(item => item.in);
        return Math.max(...incomes);
    },
);

const StoresIncome = (props) => {
    const { stores } = props;
    const maxIncome = maxIncomeSelector(props);

    return (
        <div>
            <h4>Stores Income</h4>
            <div className='stores-income'>
                {stores.byIncome.map((store, index) => {
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

export default connect(
    state => ({
        stores: state.stores,
    }),
)(StoresIncome);
