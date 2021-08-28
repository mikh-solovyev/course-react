import React from "react";
import Logo from "../components/Logo/Logo";
import {withAuth} from "../AuthContext";
import PropTypes from 'prop-types';
import Button from "../components/Button/Button";
import FormField from "../components/FormField/FormField"

class Login extends React.Component {

    static propTypes = {
        isLoggedIn: PropTypes.bool,
        login: PropTypes.func,
        changePage: PropTypes.func,
        currentPage: PropTypes.string
    }

    changePage = (page) => {
        this.props.changePage(page);
    }

    authenticate = async (event) => {
        event.preventDefault();
        const {login, password} = event.target;
        await this.props.logIn(login.value, password.value);

        if(this.props.isLoggedIn) {
            this.changePage("map");
        }
    }

    render() {
        return <>
            <div className="login-page">
                <div className="row">
                    <div className="col">
                        <div className="logo logo_page--login">
                            <Logo currentPage={this.props.currentPage}/>
                        </div>
                    </div>
                    <div className="col">
                        <form method="post" className="login__form form" onSubmit={this.authenticate}>
                            <div className="form__title">Войти</div>
                            <div className="form__subtitle">
                                Новый пользователь?
                                <a href="#" onClick={() => this.changePage("registration")} className="form__link">Зарегистрируейтесь</a>
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

export const LoginWithAuth = withAuth(Login);