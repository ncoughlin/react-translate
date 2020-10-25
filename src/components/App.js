import React, { Component } from "react";

import UserCreate from "./UserCreate";

import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class App extends Component {
  state = { language: "english", color: "red" };

  // change state of language when flag is clicked
  changeLanguage = (language) => {
    this.setState({ language });
  };

  // change color of button when flag is clicked
  changeColor = (color) => {
    this.setState({ color });
  };

  // bundle of functions for flag click
  onFlagClick = (language, color) => {
    this.changeLanguage(language);
    this.changeColor(color);
  }

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onFlagClick("english","red")}
          />
          <i
            className="flag nl"
            onClick={() => this.onFlagClick("dutch","blue")}
          />
        </div>
        <ColorContext.Provider value={this.state.color}>
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;
