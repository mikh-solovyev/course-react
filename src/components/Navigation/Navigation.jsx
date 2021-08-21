import React from "react";
import "./Navigation.css";

class Navigation extends React.Component {

    state = {
        items: [
            {id: 1, name: "Карта", link: "map"},
            {id: 2, name: "Профиль", link: "profile"},
            {id: 3, name: "Выйти", link: "login"}
        ]
    };

    render() {
        return <nav className="navigation">
            <ul className="navigation__list">
                {this.state.items.map(({id, name, link}) => (
                    <li className="navigation__item" key={id}>
                        <button
                            onClick={()=> this.props.changePage(link)}
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