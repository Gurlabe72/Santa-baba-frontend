import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
import { Container } from 'semantic-ui-react'

class MapContainer extends Component {
    render() {
        return (
            <Container>
                <Map google={this.props.google} zoom={14} style={{ width: '83.2%', height: '50%' }}>

                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                    <InfoWindow onClose={this.onInfoWindowClose}>
                        <div>
                            {/* <h1>{this.state.selectedPlace.name}</h1> */}
                        </div>
                    </InfoWindow>
                </Map>

            </Container>
        )
    }
}
export default GoogleApiWrapper({
    apiKey: ('AIzaSyBKnukkbaHJMsVGXd0iFjP5OMQSo-EPy_M')
})(MapContainer)