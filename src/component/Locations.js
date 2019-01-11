import React, { Component } from 'react';
import { connect } from 'react-redux';


class Locations extends Component {
    render() {
        return !this.props.locations ? null : (
            <div>
                {this.props.locations.locations.map(
                    location => {
                        return (
                            <div>
                                {location.location}
                            </div>
                        )
                    }
                )}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        locations: state.locations
    }
}
export default connect(mapStateToProps, null)(Locations)