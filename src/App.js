import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    Persons: [{ name: "shivam", age: 26 }, { name: "irfan", age: 27 }]
  };
  switchNameHandler = myName => {
    // console.log("was clicked");
    this.setState({
      Persons: [{ name: myName, age: 26 }, { name: "nitu", age: 27 }]
    });
  };
  nameChangeHandler = event => {
    this.setState({
      Persons: [{ name: "max", age: 26 }, { name: event.target.value, age: 27 }]
    });
  };
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    return (
      <div className="App">
        <h1>Hi there</h1>
        <p1>This is really working</p1>
        <button style={style} onClick={() => this.switchNameHandler("Shafi")}>
          Swith name
        </button>
        <Person name="shafi" age="27" />
        <Person
          name="messi"
          age="31"
          click={this.switchNameHandler.bind(this, "Noorain")}
          changed={this.nameChangeHandler}
        >
          I have hobby to play football
        </Person>
        <Person
          name={this.state.Persons[0].name}
          age={this.state.Persons[0].age}
        />
        <Person
          name={this.state.Persons[1].name}
          age={this.state.Persons[1].age}
        />
      </div>
    );
  }
}

export default App;
