import React from "react";
import "./Navigation.css";
import PropTypes from 'prop-types';

class Navigation extends React.Component {

    static propTypes = {
        currentPage: PropTypes.string,
        logOut: PropTypes.func,
        changePage: PropTypes.func
    }

    state = {
        items: [
            {id: 1, name: "Карта", link: "map"},
            {id: 2, name: "Профиль", link: "profile"},
            {id: 3, name: "Выйти", link: "login"}
        ]
    };

    changePage = (link) => {
        if(link === "login") {
            this.unauthenticated();
        }

        this.props.changePage(link);
    }

    unauthenticated = () => {
        this.props.logOut();
    }

    render() {
        return <nav className="navigation">
            <ul className="navigation__list">
                {this.state.items.map(({id, name, link}) => (
                    <li className="navigation__item" key={id}>
                        <button
                            data-link={link}
                            onClick={()=> this.changePage(link)}
                            className={`navigation__link ${this.props.currentPage === link ? "active" : ""}`}>
                            {name}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    }
}

export default Navigation;