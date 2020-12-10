// so to block out everything I need to do, let's start with what I want

// const { render } = require("@testing-library/react");

// I WANT TO MAKE A PAGE THAT SHOWS GUITARS, AND YOU CAN CLICK TO BUY THEM AND PUT THEM IN YOUR 'CART' OR MARK THEM AS 'SOLD' OR 'LIKE/DISLIKE'

// I need to make the page render first. Once I know the route is properly connected, I can start working on making a state to display a list of guitars


import React from 'react';
import { Header, } from "semantic-ui-react";
import Guitar from "./Guitar";

class Nate extends React.Component {
  state = {
    guitars: [
      { id: 1, brand: "Gibson", model: "'59 Les Paul" },
      { id: 2, brand: "Fender", model: "American Professional II Stratocaster" },
      { id: 3, brand: "Ibanez", model: "JEM - Steve Vai Signature" },
    ]
  };

  renderGuitars = () => {
    return this.state.guitars.map( guitar => <Guitar key={guitar.id} {...guitar} />)
  };
  
  render() {
    return (
      <div>
        <Header as="h1">Guitar wishlist</Header>
        { this.renderGuitars() }
      </div>
    )
  }
}

export default Nate;