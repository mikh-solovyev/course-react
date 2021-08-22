import React from "react";
import logoWhite from "../../assets/logoWhite.png";
import logoDark from "../../assets/logoDark.png";
import PropTypes from 'prop-types';

class Logo extends React.Component {

    static propTypes = {
        currentPage: PropTypes.string
    }

    getTheme() {
        return (["login", "registration"].includes(this.props.currentPage)) ? logoWhite : logoDark;
    }

    render() {
        return <>
            <div className="logo"><img src={this.getTheme()} alt="Loft-taxi"/></div>
        </>
    }
}

export default Logo;
