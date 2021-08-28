import React, {Component} from "react";
import mapboxgl from 'mapbox-gl';
import {withAuth} from "../AuthContext";
import Button from "../components/Button/Button";
import FormField from "../components/FormField/FormField";

class Map extends Component {
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
            <div className="map-wrapper">
                <div className="map" data-testid="map" ref={this.mapContainer}/>

                <form action="#" className="order__form form">
                    <div className="form__field-wrapper">

                        <FormField options={{
                            name: "from",
                            label: "Откуда*",
                            type: "text",
                            className: "form__field-from"
                        }}/>

                        <FormField options={{
                            name: "to",
                            label: "Куда*",
                            type: "text",
                            className: "form__field-to"
                        }}/>

                    </div>
                    <div className="form__btn">
                        <Button className="btn_type--full" children="Вызвать такси"/>
                    </div>
                </form>
            </div>
        </>
    }
}

export const MapWithAuth = withAuth(Map);