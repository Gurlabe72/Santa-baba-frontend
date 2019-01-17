import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { Card, Icon, Container } from 'semantic-ui-react';
import LocationForm from './LocationForm';
import MapContainer from './MapContainer'
class Locations extends Component {

    render() {
        console.log(this.props.locations)
        return !this.props.locations ? null : (
            <Fragment>
                <MapContainer />
                <Container style={{ marginTop: '22em' }}>
                    <LocationForm />
                    <Card.Group> {
                        this.props.locations.locations.map(
                            (location, i) => {
                                return (
                                    <Card key={i} color={(() => {
                                        switch (location.postType) {
                                            case "On the Road": return "red";
                                            case "Shipping Dock": return "blue";
                                            case "Truck Stop": return "yellow";
                                            default: return "#FFFFFF";
                                        }
                                    })()} fluid raised link>
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
            </Fragment>
        )


    }
}
const mapStateToProps = (state) => {
    return {
        locations: state.locations
    }
}

export default connect(mapStateToProps, null)(Locations)