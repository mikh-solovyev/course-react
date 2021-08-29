import React from "react";
import {LoginWithAuth} from "./pages/Login";
import {RegistrationWithAuth} from "./pages/Registration";
import {MapWithAuth} from "./pages/Map";
import {ProfileWithAuth} from "./pages/Profile";
import {connect} from "react-redux";
import {logOut} from "./actions";
import {Route, Switch} from "react-router-dom";
import {PrivateRoute} from "./PrivateRoute";

import Header from "./components/Header/Header";
import './App.css';


class App extends React.Component {

  render() {
    return <>
      {(this.props.isLoggedIn) ? <Header logOut={this.props.logOut}/> : ""}
      <main>
        <section>
          <Switch>
            <Route exact path="/" component={LoginWithAuth}/>
            <Route exact path="/registration" component={RegistrationWithAuth}/>
            <PrivateRoute path="/map" component={MapWithAuth}/>
            <PrivateRoute path="/profile" component={ProfileWithAuth}/>
          </Switch>
        </section>
      </main>
    </>
  }
}

export default connect(
    (state) => ({isLoggedIn: state.auth.isLoggedIn}),
    {logOut}
)(App);
