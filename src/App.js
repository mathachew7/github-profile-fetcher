import React, { Fragment, Component } from "react";

import Banner from "./components/banner/banner";
import SearchBox from "./components/search-box/search-box";
import Card from "./components/card/card";
import Footer from "./components/footer/Footer";
import "./App.css"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: "",
      userData: "",
    };
  }

  onInputChange = (event) => {
    this.setState({ searchName: event.target.value }, () => {
      this.getData(this.state.searchName);
    });
  };

  getData = (userName) => {
    fetch(`https://api.github.com/users/${userName}`)
      .then((res) => res.json())
      .then((data) => this.setState({ userData: data }))
      .catch((error) => {
        alert("Oops! Could not reach GitHub");
        console.log("Oops! We have an error", error);
      });
  };

  render() {
    return (
      <Fragment>
        <Banner />
       
        <SearchBox onInputChange={this.onInputChange} />
          
          
          {this.state.userData.id && this.state.searchName !== "" ? (
          <Card profile={this.state.userData} />
        ) : (
          <div className="no-data">
            Above Username doesn't associated with any GitHub Profile. <br />
          </div>
        )}
         
        
       <Footer />
      </Fragment>
    );
  }
}

export default App;
