import React from "react";
import {connect} from "react-redux";
import {authenticate} from "../actions";
import Logo from "../components/Logo/Logo";
import PropTypes from 'prop-types';
import Button from "../components/Button/Button";
import FormField from "../components/FormField/FormField";
import {Link} from "react-router-dom";

class Login extends React.Component {

    constructor(props) {
        super(props);

        if(this.props.isLoggedIn) {
            this.props.history.push("/map");
        }
    }

    static propTypes = {
        isLoggedIn: PropTypes.bool,
        login: PropTypes.func,
        currentPage: PropTypes.string
    }

    auth = async (event) => {
        event.preventDefault();
        const {login, password} = event.target;
        await this.props.authenticate(login.value, password.value);

        if(this.props.isLoggedIn) {
            this.props.history.push("/map");
        }
    }

    render() {
        return <>
            <div className="login-page">
                <div className="row">
                    <div className="col">
                        <div className="logo logo_page--login">
                            <Logo currentPage={this.props.location.pathname}/>
                        </div>
                    </div>
                    <div className="col">
                        <form method="post" className="login__form form" onSubmit={this.auth}>
                            <div className="form__title">Войти</div>
                            <div className="form__subtitle">
                                Новый пользователь?
                                <Link to="/registration" className="form__link">Зарегистрируейтесь</Link>
                            </div>

                            <FormField options={{
                                name: "login",
                                label: "Имя пользователя*",
                                type: "text"
                            }}/>

                            <FormField options={{
                                name: "password",
                                label: "Пароль*",
                                type: "password"
                            }}/>

                            <div className="form__btn">
                                <Button children="Войти"/>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    }
}

export const LoginWithAuth = connect(
    (state) => ({isLoggedIn: state.auth.isLoggedIn}),
    { authenticate }
)(Login);