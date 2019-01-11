import React, { Component } from 'react';
import { connect } from 'react-redux';


class OnTheRoads extends Component {
    render() {
        return !this.props.onTheRoads ? null : (
            <div>
                {this.props.onTheRoads.map(
                    onTheRoad => {
                        return (
                            <div>
                                {onTheRoad.onTheRoad}
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
        onTheRoads: state.app.onTheRoads
    }
}
export default connect(mapStateToProps, null)(OnTheRoads)