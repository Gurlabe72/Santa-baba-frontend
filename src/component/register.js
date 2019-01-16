import React, { Component } from 'react'
<<<<<<< HEAD
import { Form, Button } from 'semantic-ui-react';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                dateOfBirth: ""
            },
            errors: {},
            loading: false
        }
    }
    render() {

        const { data } = this.state;

        return (
            <div>
                <Form>
                    <Form.Field>
                        <label htmlFor="firstname">First Name</label>
                        <input
                            placeholder="First Name"
                            name="firstName"
                            value={data.firstName}
                            onChange={this.onInputChange} />
                    </Form.Field>

                    <Form.Field>
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            placeholder="lastName Name"
                            name="lastName"
                            value={data.lastName}
                            onChange={this.onInputChange} />
                    </Form.Field>
                    <Form.Field>

                    </Form.Field>
                    <label>email</label>
                    <input
                        placeholder="email"
                        name="email"
                        value={data.email}
                        onChange={this.onInputChange} />
                    <Form.Field>

                    </Form.Field>
                    <label>Password</label>
                    <input
                        placeholder="password"
                        name="password"
                        value={data.password}
                        onChange={this.onInputChange} />
                    <Form.Field>

                    </Form.Field>
                    <label>Date of birth</label>
                    <input
                        placeholder="date"
                        name="dateOfBirth"
                        name="date"
                        value={data.password}
                        onChange={this.onInputChange} />
                    <Form.Field>

                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
=======

class register extends Component {
    render() {
        return (
            <div>

>>>>>>> f99957ae40cda58555fa8182004c5f9baa084bf1
            </div>
        )
    }
}

<<<<<<< HEAD
export default Register
=======
export default register
>>>>>>> f99957ae40cda58555fa8182004c5f9baa084bf1
