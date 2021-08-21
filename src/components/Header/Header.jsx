import React from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

import "./Header.css";

class Header extends React.Component {
    render() {
        return <>
            <header className="header">
                <div className="container">
                    <div className="row header__row">
                        <Logo currentPage={this.props.currentPage}/>
                        <Navigation changePage={this.props.changePage} currentPage={this.props.currentPage}/>
                    </div>
                </div>
            </header>
        </>
    }
}

export default Header;