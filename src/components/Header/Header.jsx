import React from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import PropTypes from 'prop-types';

import "./Header.css";

class Header extends React.Component {

    static propTypes = {
        currentPage: PropTypes.string,
        logOut: PropTypes.func,
        changePage: PropTypes.func
    }

    render() {
        return <>
            <header data-testid="header-component" className="header">
                <div className="container">
                    <div className="row header__row">
                        <Logo currentPage={this.props.currentPage}/>
                        <Navigation logOut={this.props.logOut} changePage={this.props.changePage} currentPage={this.props.currentPage}/>
                    </div>
                </div>
            </header>
        </>
    }
}

export default Header;