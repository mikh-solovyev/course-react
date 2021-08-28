import React from "react";
import Logo from "../components/Logo/Logo";
import {withAuth} from "../AuthContext";
import PropTypes from 'prop-types';
import Button from "../components/Button/Button";
import FormField from "../components/FormField/FormField";

class Registration extends React.Component {

    static propTypes = {
        changePage: PropTypes.func,
        currentPage: PropTypes.string
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.changePage("map");
    }

    render() {
        return <>
            <div className="registration-page">
                <div className="row">
                    <div className="col">
                        <div className="logo logo_page--registration">
                            <Logo currentPage={this.props.currentPage}/>
                        </div>
                    </div>
                    <div className="col">
                        <form method="post" className="registration__form form" onSubmit={(e) => this.onFormSubmit(e)}>
                            <div className="form__title">Регистрация</div>
                            <div className="form__subtitle">
                                Уже зарегистрирован?
                                <a href="#" onClick={() => this.props.changePage("login")} className="form__link">Войти</a>
                            </div>

                            <FormField options={{
                                name: "email",
                                label: "Адрес электронной почты",
                                type: "email"
                            }}/>

                            <div className="form__field">
                                <div className="row">
                                    <div className="col">
                                        <FormField options={{
                                            name: "name",
                                            label: "Имя",
                                            type: "text"
                                        }}/>
                                    </div>
                                    <div className="col">
                                        <FormField options={{
                                            name: "lastname",
                                            label: "Фамилия",
                                            type: "text"
                                        }}/>
                                    </div>
                                </div>
                            </div>

                            <FormField options={{
                                name: "password",
                                label: "Пароль",
                                type: "password"
                            }}/>

                            <div className="form__btn">
                                <Button children="Зарегистрироваться"/>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    }
}

export const RegistrationWithAuth = withAuth(Registration);