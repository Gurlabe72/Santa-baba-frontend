import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Form, Button, Card, Dropdown } from 'semantic-ui-react';
import { bindActionCreators } from "redux";
import { createLocations } from '../Redux/actions/locations.actions';

const options = [
    {
        text: 'Truck Stop',
        value: 'Truck Stop',
    },
    {
        text: 'On the Road',
        value: 'On the Road',
    },
    {
        text: 'Shipping Dock',
        value: 'Shipping Dock',
    },
]

class LocationForm extends Component {
    state = {
        userId: "",
        location: "",
        postType: "",
        accidents: "",
        hazards: "",
        delays: "",
        scaleOpen: "",
        timeIn: "",
        delayTime: "",
        amenities: "",
        gasPrice: 30,
        parking: 30,
        comments: "",
        errors: {},
        loading: false
    }
    handleSubmit = (e) => {
        e.preventDefault()
        let { location, postType } = this.state
        let date = new Date()
        let payload = {
            location, postType, date
        }
        this.props.createLocations(payload)
    }

    render() {
        return (
            <div style={{ marginBottom: '2em' }}>

                < Card fluid >
                    < Card.Content >
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Field>
                                <h1>Locations</h1>
                                <label htmlFor="location">Location</label>
                                <input
                                    placeholder="Location"
                                    name="location"
                                    onChange={(e) => this.setState({ location: e.target.value })} />
                            </Form.Field>
                            <Form.Field>
                                <label htmlFor="postType">Where are you?</label>
                                <Dropdown placeholder='What is it?' fluid selection options={options} onChange={(e) => this.setState({ postType: e.target.innerText })} />
                            </Form.Field >
                            <div>
                                <h1>On the Road</h1>
                                <Form.Field>
                                    <label htmlFor="accidents">What should the Drivers know?</label>
                                    <input
                                        placeholder="Write about the incident..."
                                        name="accidents"
                                        onChange={(e) => this.setState({ accidents: e.target.value })} />
                                </Form.Field>
                                <Form.Field>
                                    <label htmlFor="hazards">What should the Drivers know about the hazard?</label>
                                    <input
                                        placeholder="Write about the hazard.."
                                        name="hazards"
                                        onChange={(e) => this.setState({ hazards: e.target.value })} />
                                </Form.Field>
                                <Form.Field>
                                    <label htmlFor="delays">What kind of delay is on the road?</label>
                                    <input
                                        placeholder="Write about the Delay"
                                        name="delays"
                                        onChange={(e) => this.setState({ delays: e.target.value })} />
                                </Form.Field>
                            </div>
                            <div>
                                <h1>At the Shipping Yard</h1>
                                <Form.Field>
                                    <label htmlFor="scaleOpen">Is this Scale open?</label>
                                    <input
                                        placeholder="Yes or No?"
                                        name="scaleOpen"
                                        onChange={(e) => this.setState({ scaleOpen: e.target.value })} />
                                </Form.Field>
                                <Form.Field>
                                    <label htmlFor="timeIn">What time was your appointment?</label>
                                    <input
                                        placeholder="Write appointment time here "
                                        name="timeIn"
                                        onChange={(e) => this.setState({ timeIn: e.target.value })} />
                                </Form.Field>
                                <Form.Field>
                                    <label htmlFor="delaytime">How long is your appointment delay?</label>
                                    <input
                                        placeholder="Write how long you've been waiting"
                                        name="delayTime"
                                        onChange={(e) => this.setState({ delayTime: e.target.value })} />
                                </Form.Field>
                            </div>
                            <div>
                                <h1>At the Truck Stop</h1>
                                <Form.Field>
                                    <label htmlFor="amentities">What amentities does the Truck Stop Provide?</label>
                                    <input
                                        placeholder="List amenities here"
                                        name="location"
                                        onChange={(e) => this.setState({ location: e.target.value })} />
                                </Form.Field>

                                <Form.Field>
                                    <label htmlFor="gasPrice">How much is diesel there?</label>
                                    <input
                                        placeholder="Write the diesel price here"
                                        name="gasPrice"
                                        onChange={(e) => this.setState({ gasPrice: e.target.value })} />
                                </Form.Field>

                                <Form.Field>
                                    <label htmlFor="parking">Is there any parking availible?</label>
                                    <input
                                        placeholder="How many more trucks will fit?"
                                        name="pakring"
                                        onChange={(e) => this.setState({ parking: e.target.value })} />
                                </Form.Field>
                                <Form.Field>
                                    <label htmlFor="comments">Anything else you would like to add?</label>
                                    <input
                                        placeholder="write additional commments here"
                                        name="comments"
                                        onChange={(e) => this.setState({ commments: e.target.value })} />
                                </Form.Field>
                            </div>
                            <Button type='submit'>Submit</Button>
                        </Form>
                    </Card.Content >
                </Card >
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createLocations: bindActionCreators(createLocations, dispatch)
    }
}
export default connect(null, mapDispatchToProps)(LocationForm)