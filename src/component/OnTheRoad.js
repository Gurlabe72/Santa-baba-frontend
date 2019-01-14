import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Segment } from 'semantic-ui-react'

class OnTheRoads extends Component {
    render() {
        return !this.props.onTheRoads ? null : (
            <div>
                {this.props.onTheRoads.map(
                    onTheRoad => {
                        return (

                            <Segment inverted>
                                <Form inverted>
                                    <Form.Group widths='equal'>
                                        <Form.Input fluid label='gasPrices' placeholder='How much is the gas there?' />
                                        <Form.Input fluid label='parkingFees' placeholder='How much was it to park?' />
                                        <Form.Input fluid label='comments' placeholder='is there anything else you would like to add about this place?' />
                                    </Form.Group>
                                    <Button type='submit'>Submit</Button>
                                    {onTheRoad.onTheRoad}     <Form.Input fluid label='amenities' placeholder='What amenities did they have?' />
                                </Form>
                            </Segment>
                        )

                    }
                )}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        onTheRoads: state.app.onTheRoads
    }
}
export default connect(mapStateToProps, null)(OnTheRoads)