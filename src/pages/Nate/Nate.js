// so to block out everything I need to do, let's start with what I want

// const { render } = require("@testing-library/react");

// I WANT TO MAKE A PAGE THAT SHOWS GUITARS, AND YOU CAN CLICK TO BUY THEM AND PUT THEM IN YOUR 'CART' OR MARK THEM AS 'SOLD' OR 'LIKE/DISLIKE'

// I need to make the page render first. Once I know the route is properly connected, I can start working on making a state to display a list of guitars


import React from 'react';
import { Header, } from "semantic-ui-react";
import Guitar from "./Guitar";
import GuitarForm from "./GuitarForm";

class Nate extends React.Component {
  state = {
    guitars: [
      { id: 1, brand: "Gibson", model: "'59 Les Paul" },
      { id: 2, brand: "Fender", model: "American Professional II Stratocaster" },
      { id: 3, brand: "Ibanez", model: "JEM - Steve Vai Signature" },
    ]
  };

  getId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  addGuitar = (guitarData) => {
    const { guitars, } = this.state;
    const guitar = { id: this.getId(), ...guitarData, };
    this.setState({ guitars: [guitar, ...guitars] });
  }

  editGuitar = (guitarData) => {
    const guitars = this.state.guitars.map( guitar => {
      if (guitar.id === guitarData.id )
        return guitarData;
      return guitar
    });
      this.setState({ guitars })
  }

  renderGuitars = () => {
    return this.state.guitars.map( guitar => <Guitar key={guitar.id} {...guitar} edit={this.editGuitar} />)
  };
  
  render() {
    return (
      <div>
        <Header as="h1">Guitar wishlist</Header>
        <p>Add a guitar to the list <GuitarForm add={this.addGuitar} /></p>
        { this.renderGuitars() }
      </div>
    )
  }
}

export default Nate;