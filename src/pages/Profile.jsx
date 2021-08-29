import React from "react";
import {connect} from "react-redux";
import McLogo from "../components/McLogo/McLogo";
import Button from "../components/Button/Button";
import FormField from "../components/FormField/FormField";
import {logOut} from "../actions";

class Profile extends React.Component {

    render() {
        return <>
            <div className="map-wrapper disabled">
                <div className="fake-map"/>

                <form action="#" className="profile__form form">
                    <div className="form__title">Профиль</div>
                    <div className="form__subtitle">Способ оплаты</div>

                    <div className="row row-profile">
                        <div className="card-field">
                            <div className="form__card">
                                <div className="mclogo">
                                    <McLogo/>
                                </div>

                                <FormField options={{
                                    name: "number",
                                    label: "Номер карты:",
                                    type: "text",
                                    placeholder: "3456 7890 4325 5300"
                                }}/>

                                <FormField options={{
                                    name: "date",
                                    label: "Срок действия:",
                                    type: "text",
                                    placeholder: "10/22",
                                    class: "form__field_width--small"
                                }}/>

                            </div>
                        </div>
                        <div className="card-field">

                            <FormField options={{
                                name: "name",
                                label: "Имя владельца:",
                                type: "text",
                                placeholder: "IVAN PETROV",
                            }}/>

                            <FormField options={{
                                name: "cvc",
                                label: "CVC: ",
                                type: "password",
                                placeholder: "***",
                                className: "form__field_width--small",
                                attention: true,
                            }}/>
                        </div>
                    </div>

                    <div className="form__btn form__btn-center">
                        <Button children="Сохранить"/>
                    </div>

                </form>
            </div>
        </>
    }
}
export const ProfileWithAuth = connect(
    null,
    {logOut}
)(Profile);