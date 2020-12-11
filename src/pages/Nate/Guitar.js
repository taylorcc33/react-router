import React from "react";
import { Header, Segment, Button, Icon } from "semantic-ui-react";
import GuitarForm from './GuitarForm';

class Guitar extends React.Component {
  state = { editing: false, };

  toggleEdit = () => this.setState({ editing: !this.state.editing, });

  render() {
    return (
        <Segment inverted tertiary inverted color='blue' style={{ display:'flex', alignItems: 'center', justifyContent:'space-between'}}>
          {
            this.state.editing ?
              <GuitarForm { ...this.props } />
            :
              <div>
                <Header as="h3">{ this.props.model }</Header>
                <h5>{ this.props.brand }</h5>
              </div>
          }
            <div>
              <Button icon color='grey' onClick={this.toggleEdit}>
                <Icon name="pencil" />
              </Button>
              <Button icon color='red'>
                <Icon name='trash' />
              </Button>
            </div>
        </Segment>
    )
  }
}

export default Guitar;