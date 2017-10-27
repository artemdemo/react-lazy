const initialState = {
    byIncome: [
        {name: 'Store #1', 'in': 2000},
        {name: 'Store #2', 'in': 3000},
        {name: 'Store #3', 'in': 4740},
        {name: 'Store #4', 'in': 1990},
        {name: 'Store #5', 'in': 800},
    ],
    byCity: [
        {name: 'New York', amount: 2100},
        {name: 'Tokyo', amount: 1450},
        {name: 'Moscow', amount: 5000},
        {name: 'Tel Aviv', amount: 3000},
    ],
};

export default function(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
