import React from "react";
import Logo from "../components/Logo/Logo";

class Login extends React.Component {

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.changePage("map");
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
                        <form method="post" className="login__form form" onSubmit={(e) => this.onFormSubmit(e)}>
                            <div className="form__title">Войти</div>
                            <div className="form__subtitle">
                                Новый пользователь?
                                <a href="#" onClick={() => this.props.changePage("registration")} className="form__link">Зарегистрируейтесь</a>
                            </div>

                            <div className="form__field">
                                <label htmlFor="name">Имя пользователя*</label>
                                <input id="name" className="form__input" type="text" name="name"/>
                            </div>

                            <div className="form__field">
                                <label htmlFor="password">Пароль*</label>
                                <input id="password" className="form__input" type="password" name="password"/>
                            </div>

                            <div className="form__btn">
                                <button type="submit" className="btn">Войти</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    }
}

export default Login;