import React from 'react';

const lazify = loader => class LazyComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            Component: null,
        };
    }

    componentDidMount() {
        loader().then(pkg => this.setState({
            Component: pkg.default,
        }));
    }

    render() {
        const { props } = this;
        const { Component } = this.state;

        if (Component) {
            return (
                <Component {...props} />
            );
        }

        return (
            <span>Loading...</span>
        );
    }
};

export default lazify;
