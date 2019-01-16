import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button, Card } from 'semantic-ui-react';


class Locations extends Component {
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

        return !this.props.locations ? null : (
            <div>
                {
                    this.props.locations.locations.map(
                        location => {
                            return (
                                <div>
                                    {location.location}
                                </div>
                            )
                        }
                    )
                }
                <Card>
                    < Card.Content >
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
                            <label htmlFor="email">email</label>
                            <input
                                placeholder="email"
                                name="email"
                                value={data.email}
                                onChange={this.onInputChange} />
                            <Form.Field>

                            </Form.Field>
                            <label htmlFor="Password">Password</label>
                            <input
                                placeholder="password"
                                name="password"
                                value={data.password}
                                onChange={this.onInputChange} />
                            <Form.Field>

                            </Form.Field>
                            <label htmlFor="Date of Birth">Date of birth</label>
                            <input
                                placeholder="Date of Birth"
                                name="dateOfBirth"
                                name="date"
                                value={data.dateOfBirth}
                                onChange={this.onInputChange} />
                            <Form.Field>

                            </Form.Field>
                            <Button type='submit'>Submit</Button>
                        </Form>
                    </Card.Content >
                </Card >
            </div >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        locations: state.locations
    }
}
export default connect(mapStateToProps, null)(Locations)