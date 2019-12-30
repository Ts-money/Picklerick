import React, { Component } from "react";
import logo from "./logo.svg";
import Header from "./components/Header/header";
import Modal from "./components/Modal/modal";
import RickAndMortyPictures from "./components/Picture/picture";
import pictures from "./pictures.json";
import _ from "underscore";
import "./App.css";

class App extends Component {

  state = {
    count: 0,
    pictures,
    alreadyClicked: [],
    showModal: "none",
    showInput: "none",
    counter: "fixed",
    input: "",
    numberCorrect: 0
  }

  handleIncrement = id => {
    if(!this.state.alreadyClicked.includes(pictures[id - 1])) {
      if (this.state.count < 14) {
        this.state.alreadyClicked.push(pictures[id - 1]);
        this.setState({
          count: this.state.count + 1,
          pictures: _.shuffle(pictures)
        });
      } else if (this.state.count > 13) {
        this.setState({
          showModal: "block",
          counter: "absolute",
          count: 15
        });
      }
    } else {
      this.setState({
        count: 0,
        pictures: _.shuffle(pictures),
        alreadyClicked: []
      });
    }
  }

  closeModal = () => {
    this.setState({ showModal: "none" });
  }

  restart = () => {
    this.setState({
      count: 0,
      pictures,
      alreadyClicked: [],
      showModal: "none",
      showInput: "none",
      counter: "fixed",
      input: "",
      numberCorrect: 0
    });
  }

  render() {
    return (
      <div className="App">
        <Header count={this.state.count} counter={this.state.counter} />
        <RickAndMortyPictures pictures={this.state.pictures} handleIncrement={this.handleIncrement} showInput={this.state.showInput} />
        <Modal show={this.state.showModal} onHide={this.closeModal} restart={this.restart} />
      </div>
    );
  }
}

export default App;
