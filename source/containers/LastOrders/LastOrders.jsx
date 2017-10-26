import React from 'react';

const orders = [
    {fname: 'Mark', lname: 'Otto', username: '@mdo'},
    {fname: 'Jacob', lname: 'Thornton', username: '@fat'},
    {fname: 'Larry', lname: 'the Bird', username: '@twitter'},
];

const LastOrders = () => {
    return (
        <div className='last-orders'>
            <h4>Last Orders</h4>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((item, index) => (
                        <tr key={`last-orders__item-${index}`}>
                            <td>{item.fname}</td>
                            <td>{item.lname}</td>
                            <td>{item.username}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LastOrders;
