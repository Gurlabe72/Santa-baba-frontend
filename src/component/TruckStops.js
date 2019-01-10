import React, { Component } from 'react';
import { connect } from 'react-redux';


class TruckStops extends Component {
    render() {
        return !this.props.truckStops ? null : (

            <div>
                {this.props.truckStops.map(
                    truckStop => {
                        return (
                            <div>
                                {truckStop.truckStop}
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
        truckStops: state.app.truckStops
    }
}
export default connect(mapStateToProps, null)(TruckStops)