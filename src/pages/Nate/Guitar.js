


import React from "react";
import { Header, Segment, } from "semantic-ui-react";

class Guitar extends React.Component {
  render() {
    return (
      <Segment>
        <Header as="h4">{ this.props.model }</Header>
        <p>{ this.props.brand }</p>
      </Segment>
    )
  }
}

export default Guitar;