import React from "react";
import {LoginWithAuth} from "./pages/Login";
import {RegistrationWithAuth} from "./pages/Registration";
import {MapWithAuth} from "./pages/Map";
import {ProfileWithAuth} from "./pages/Profile";
import {withAuth} from "./AuthContext";

import Header from "./components/Header/Header";

import './App.css';

class App extends React.Component {

  state = {
    currentPage: "login"
  };

  changePage = (page)  => {
    if(this.props.isLoggedIn) {
      this.setState({currentPage: page})
    } else {
      if(["login", "registration"].includes(page)) {
        this.setState({currentPage: page})
      }
    }
  }

  PAGES = {
    login: (props) => <LoginWithAuth {...props}/>,
    registration: (props) => <RegistrationWithAuth {...props}/>,
    map: (props) => <MapWithAuth {...props}/>,
    profile: (props) => <ProfileWithAuth {...props}/>
  }

  render() {
    if(["login", "registration"].includes(this.state.currentPage)) {
      return <>
        <main>
          <section>
            {this.PAGES[this.state.currentPage]({changePage: this.changePage, currentPage: this.state.currentPage})}
          </section>
        </main>
      </>
    } else {
      return <>
        <Header
            changePage={this.changePage}
            currentPage={this.state.currentPage}
            logOut={this.props.logOut}
        />
        <main>
          <section>
            {this.PAGES[this.state.currentPage]({changePage: this.changePage, currentPage: this.state.currentPage})}
          </section>
        </main>
      </>
    }
  }
}

export default withAuth(App);
