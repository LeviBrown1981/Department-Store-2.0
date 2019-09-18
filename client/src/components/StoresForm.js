import React from 'react';
import axios from "axios";
import { Form, } from "semantic-ui-react";
import HeaderText from "./styles/HeaderText";

class StoresForm extends React.Component {
  defaultValues = { name: "", price: "", description: "", department: "", };
  state = { ...this.defaultValues, };

  handleSubmit = (e) => {
    e.preventDefault();
    const store = { ...this.state, };
    // TODO: make api POST request
    axios.post("/api/stores", store)
      .then( res => {
        this.props.history.push("/stores");
      })
    this.setState({ ...this.defaultValues, });
  }

  handleChange = (e) => {
    const { target: { name, value, } } = e;
    this.setState({ [name]: value, });
  }

  render() {
    const { name, price, description, department, } = this.state;

    return (
      <div>
        <HeaderText fSize="large">New Store</HeaderText>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              label="Name"
              name="name"
              placeholder="Name"
              value={name}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              label="Description"
              name="description"
              placeholder="Description"
              value={description}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              label="Department"
              name="department"
              placeholder="Department"
              value={department}
              onChange={this.handleChange}
            />
            <Form.Input
              label="Price"
              name="price"
              placeholder="Price"
              type="number"
              value={price}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Button color="violet">Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default StoresForm;