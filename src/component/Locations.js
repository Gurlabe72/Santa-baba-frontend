import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, Icon, Container } from 'semantic-ui-react';
import LocationForm from './LocationForm';

class Locations extends Component {

    render() {
        console.log(this.props.locations)
        return !this.props.locations ? null : (
            <Container>
                <LocationForm />
                <Card.Group> {
                    this.props.locations.locations.map(
                        (location, i) => {
                            return (
                                <Card key={i} color={location.postType === 'this is a postt' ? 'red' : 'blue'} fluid raised link>
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

            </Container >
        )


    }
}
const mapStateToProps = (state) => {
    return {
        locations: state.locations
    }
}

export default connect(mapStateToProps, null)(Locations)