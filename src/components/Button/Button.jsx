import React from "react";
import PropTypes from 'prop-types';

import "./Button.css";

class Button extends React.Component {

    static propTypes = {
        children: PropTypes.string,
        className: PropTypes.string,
        type: PropTypes.string
    }

    static defaultProps = {
        children: "Отправить",
        type: "submit"
    }

    render() {
        return <button type={this.props.type} className={`btn btn--primary ${this.props.className || ""}`}>{this.props.children}</button>
    }
}

export default Button;