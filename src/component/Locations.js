import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Form, Button, Card, Icon, Container, Dropdown } from 'semantic-ui-react';
import { createLocations } from '../Redux/actions/locations.actions';


class Locations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: "",
            postType: "",
            errors: {},
            loading: false
        }
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
        console.log(this.props.locations)
        const { data } = this.state;
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
        return !this.props.locations ? null : (
            <Container>
                <Card.Group> {
                    this.props.locations.locations.map(
                        location => {
                            return (
                                <Card color={location.postType === 'this is a postt' ? 'red' : 'blue'} fluid raised link>
                                    <Card.Content header={location.location} />
                                    <Card.Content description={location.postType} />
                                    <Card.Content extra>
                                        <Icon name='user' />
                                        4 Friends
                                        </Card.Content>
                                </Card>
                            )
                        }
                    )
                }
                </Card.Group>

                < Card >
                    < Card.Content >
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Field>
                                <label htmlFor="location">Location</label>
                                <input
                                    placeholder="Location"
                                    name="location"
                                    onChange={(e) => this.setState({ location: e.target.value })} />
                            </Form.Field>

                            <Form.Field>
                                <Dropdown placeholder='What is it?' fluid selection options={options} onChange={(e) => this.setState({ postType: e.target.innerText })} />
                            </Form.Field >

                            <Button type='submit'>Submit</Button>
                        </Form>
                    </Card.Content >
                </Card >
            </Container >
        )


    }
}
const mapStateToProps = (state) => {
    return {
        locations: state.locations
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createLocations: bindActionCreators(createLocations, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Locations)