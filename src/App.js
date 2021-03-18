import React, { Component } from "react";
import "./App.css";
import { Header } from "./Components/Header";
import Container from "react-bootstrap/Container";
import AddressList from "./Components/AddressList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Header />
          <AddressList />
        </Container>
      </div>
    );
  }
}

export default App;
