import React from "react";
import PropTypes from 'prop-types';

import "./Button.css";

class Button extends React.Component {

    static propTypes = {
        text: PropTypes.string,
        class: PropTypes.string,
        type: PropTypes.string
    }

    static defaultProps = {
        text: "Отправить",
        type: "submit"
    }

    render() {
        return <button type={this.props.type} className={`btn btn--primary ${this.props.class || ""}`}>{this.props.text}</button>
    }
}

export default Button;