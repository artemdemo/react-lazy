const pathRedirect = (path = '/') => ({
    onEnter: (nextState, replace) => replace(path),
});

export default pathRedirect;
