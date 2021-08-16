import React from "react";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Map from "./pages/Map";
import Profile from "./pages/Profile";

import Header from "./components/Header/Header";

import './App.css';

class App extends React.Component {

  state = {
    currentPage: "login"
  };

  changePage = (page)  => {
    this.setState({currentPage: page})
  }

  PAGES = {
    login: <Login changePage={this.changePage} currentPage={this.state.currentPage}/>,
    registration: <Registration changePage={this.changePage} currentPage={this.state.currentPage}/>,
    map: <Map/>,
    profile: <Profile/>
  }

  render() {
    if(["login", "registration"].includes(this.state.currentPage )) {
      return <>
        <main>
          <section>
            {this.PAGES[this.state.currentPage]}
          </section>
        </main>
      </>
    } else {
      return <>
        <Header
            changePage={this.changePage}
            currentPage={this.state.currentPage}
        />
        <main>
          <section>
            {this.PAGES[this.state.currentPage]}
          </section>
        </main>
      </>
    }
  }
}

export default App;
