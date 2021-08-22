import React from "react";
import mapboxgl from 'mapbox-gl';
import {withAuth} from "../AuthContext";
import McLogo from "../components/McLogo/McLogo";
import Button from "../components/Button/Button";
import FormField from "../components/FormField/FormField";

class Profile extends React.Component {
    map = null;
    mapContainer = React.createRef();

    componentDidMount() {
        mapboxgl.accessToken = "pk.eyJ1IjoiZHJlYW1saWtlODgiLCJhIjoiY2tzbG02ZjY3MDQ4MzJ2bGVvbjk0aWJldyJ9.wmC1IS9Fzc-pONO8oOh6vA";
        this.map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v9",
            center: [37.743498, 55.643551],
            zoom: 12
        });
    }

    componentWillUnmount() {
        this.map.remove();
    }

    render() {
        return <>
            <div className="map-wrapper disabled">
                <div className="map" data-testid="map" ref={this.mapContainer}/>

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
                                class: "form__field_width--small",
                                attention: true,
                            }}/>
                        </div>
                    </div>

                    <div className="form__btn form__btn-center">
                        <Button text="Сохранить"/>
                    </div>

                </form>
            </div>
        </>
    }
}
export const ProfileWithAuth = withAuth(Profile);