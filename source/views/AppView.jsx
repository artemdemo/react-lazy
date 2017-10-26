import React from 'react';
import Container from '../components/Container/Container';
import MainMenu from '../containers/MainMenu/MainMenu';

const AppView = (props) => {
    return [
        <MainMenu key='app-view-main-menu' />,
        <Container key='app-view-container'>
            {props.children}
        </Container>,
    ];
};

export default AppView;
