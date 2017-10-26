import React from 'react';
import Link from 'react-router/lib/Link';
import Container from '../../components/Container/Container';

import './MainMenu.less';

const MainMenu = () => {
    return (
        <div className='main-menu'>
            <Container>
                <div className='main-menu-list'>
                    <div className='main-menu-list-item'>
                        <div className='main-menu-list-item__content'>
                            <Link to='/'>Dashboard</Link>
                        </div>
                    </div>
                    <div className='main-menu-list-item'>
                        <div className='main-menu-list-item__content'>
                            <Link to='/orders'>Orders</Link>
                        </div>
                    </div>
                    <div className='main-menu-list-item
                                    main-menu-list-item_parent'>
                        <div className='main-menu-list-item__content
                                        main-menu-list-item__content_has-submenu'>
                            Stores
                        </div>
                        <div className='main-menu-sublist'>
                            <div className='main-menu-sublist__item'>
                                <Link to='/stores/all'>All</Link>
                            </div>
                            <div className='main-menu-sublist__item'>
                                <Link to='/stores/new-york'>New York</Link>
                            </div>
                            <div className='main-menu-sublist__item'>
                                <Link to='/stores/tel-aviv'>Tel Aviv</Link>
                            </div>
                            <div className='main-menu-sublist__item'>
                                <Link to='/stores/tokyo'>Tokyo</Link>
                            </div>
                        </div>
                    </div>
                    <div className='main-menu-list-item'>
                        <div className='main-menu-list-item__content'>
                            <Link to='/cms'>CMS</Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default MainMenu;
