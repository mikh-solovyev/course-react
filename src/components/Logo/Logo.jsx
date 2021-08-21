import React from "react";
import logoWhite from "../../assets/logoWhite.png";
import logoDark from "../../assets/logoDark.png";

class Logo extends React.Component {

    getTheme() {
        console.log(this.props.currentPage)
        return (["login", "registration"].includes(this.props.currentPage)) ? logoWhite : logoDark;
    }

    render() {
        return <>
            <div className="logo"><img src={this.getTheme()} alt="Loft-taxi"/></div>
        </>
    }
}

export default Logo;
