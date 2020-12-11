import React from "react";
import { Form } from "semantic-ui-react";

class GuitarForm extends React.Component {
  state = { brand: "", model: "", };

  componentDidMount() {
    if (this.props.id)
      this.setState({ brand: this.props.brand, model: this.props.model, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      this.props.edit({id: this.props.id, ...this.state});
      this.props.toggleEdit()
    } else {
      this.props.add(this.state);
    }
    this.setState({ brand: '', model: '' });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  }

  render() {
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            placeholder="Model"
            label="Model"
            name="model"
            onChange={this.handleChange}
            value={this.state.body}
          />
          <Form.Input
            placeholder="Brand"
            label="Brand"
            name="brand"
            onChange={this.handleChange}
            value={this.state.title}
          />
          <Form.Button color="green">Add Guitar</Form.Button>
        </Form.Group>
      </Form>
    )
  }
};

export default GuitarForm;