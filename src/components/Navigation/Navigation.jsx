import React from "react";
import "./Navigation.css";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

class Navigation extends React.Component {

    static propTypes = {
        logOut: PropTypes.func,
    }

    state = {
        items: [
            {id: 1, name: "Карта", link: "/map"},
            {id: 2, name: "Профиль", link: "/profile"},
        ]
    };

    unauthenticated = () => {
        this.props.logOut();
    }

    render() {
        return <nav className="navigation">
            <ul className="navigation__list">
                {this.state.items.map(({id, name, link}) => (
                    <li className="navigation__item" key={id}>
                        <Link
                            data-link={link}
                            to={link}
                            className={`navigation__link ${this.props.currentPage === link ? "active" : ""}`}>
                            {name}
                        </Link>
                    </li>
                ))}
                <li className="navigation__item">
                    <a onClick={this.unauthenticated} href="/" data-link="/" className={`navigation__link ${this.props.currentPage === "/" ? "active" : ""}`}>Выйти</a>
                </li>
            </ul>
        </nav>
    }
}

export default Navigation;