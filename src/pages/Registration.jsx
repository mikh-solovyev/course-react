import React from "react";
import Logo from "../components/Logo/Logo";


class Registration extends React.Component {

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
                                <button onClick={() => this.props.changePage("login")} className="form__link">Войти</button>
                            </div>

                            <div className="form__field">
                                <label htmlFor="email">Адрес электронной почты</label>
                                <input id="email" className="form__input" type="email" name="email"/>
                            </div>

                            <div className="form__field">
                                <div className="row">
                                    <div className="col">
                                        <div className="form__field">
                                            <label htmlFor="name">Имя</label>
                                            <input id="name" className="form__input" type="text" name="name"/>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form__field">
                                            <label htmlFor="lastname">Фамилия</label>
                                            <input id="lastname" className="form__input" type="text" name="lastname"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form__field">
                                <label htmlFor="password">Пароль</label>
                                <input id="password" className="form__input" type="password" name="password"/>
                            </div>

                            <div className="form__btn">
                                <button type="submit" className="btn">Зарегистрироваться</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    }
}

export default Registration;