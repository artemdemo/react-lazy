import React from 'react';
import Link from 'react-router/lib/Link';
import classnames from 'classnames';
import Container from '../../components/Container/Container';
import { requestRoutes } from '../../model/routes/routesSagas';
import config from '../../config';

import './MainMenu.less';

class MainMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menu: [],
        };
    }

    componentDidMount() {
        requestRoutes().then((routes) => {
            this.setState({menu: routes.menu});
        });
    }

    renderItem(item, index) {
        const { publicPath } = config;

        const children = (() => {
            if (item.children && item.children.length > 0) {
                return (
                    <div className='main-menu-sublist'>
                        {item.children.map((item, subIndex) => this.renderItem(item, `${index}-${subIndex}`))}
                    </div>
                );
            }
            return null;
        })();

        const itemName = item.link ?
            (
                <Link
                    to={{
                        pathname: publicPath + item.link,
                    }}>
                    {item.name}
                </Link>
            ) : (
                <span>
                    {item.name}
                </span>
            );
        const itemClass = classnames({
            'main-menu-list-item': true,
            'main-menu-list-item_parent': item.children && item.children.length > 0,
        });
        const itemNameClass = classnames({
            'main-menu-list-item__content': true,
            'main-menu-list-item__content_has-submenu': item.children && item.children.length > 0,
        });
        return (
            <div
                className={itemClass}
                key={`main-menu-list-item-${index}`}
            >
                <div className={itemNameClass}>
                    {itemName}
                </div>
                {children}
            </div>
        );
    }

    render() {
        return (
            <div className='main-menu'>
                <Container>
                    <div className='main-menu-list'>
                        {this.state.menu.map((item, index) => this.renderItem(item, index))}
                    </div>
                </Container>
            </div>
        );
    }
}

export default MainMenu;
