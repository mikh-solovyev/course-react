import React from "react";
import PropTypes from 'prop-types';

import "./FormField.css";

const HtmlAttention = () => {
    return <span className="label-hidden-field">?</span>
}

class FormField extends React.Component {

    static propTypes = {
        options: PropTypes.shape({
            label: PropTypes.string,
            name: PropTypes.string,
            type: PropTypes.string,
            className: PropTypes.string,
            placeholder: PropTypes.string
        })
    }

    static defaultProps = {
        options: {
            label: "Название поля",
            name: "name",
            type: "text",
            className: "",
            placeholder: "",
        }
    }

    render() {
        return (
            <div className={`form__field ${this.props.options.className || ""}`}>
                <label htmlFor={this.props.options.name}>
                    {this.props.options.label}
                    {this.props.options.attention ? <HtmlAttention/> : ""}
                </label>
                <input
                    id={this.props.options.name}
                    className="form__input"
                    type={this.props.options.type}
                    name={this.props.options.name}
                    placeholder={this.props.options.placeholder}
                />
            </div>
        )
    }
}

export default FormField;