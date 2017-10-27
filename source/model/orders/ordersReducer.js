const initialState = {
    data: [
        {top: '10%', left: '15%'},
        {top: '13%', left: '20%'},
        {top: '83%', left: '10%'},
        {top: '60%', left: '90%'},
        {top: '50%', left: '50%'},
        {top: '20%', left: '70%'},
    ],
};

export default function(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
