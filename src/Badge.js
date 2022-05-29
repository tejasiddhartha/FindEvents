import React from 'react'
import {connect} from 'react-redux';
import Card from './Card';

const Badge = ({events}) => {
    return (
        <div style={{"margin":"80px 0px 10px 0px"}}>
            <center>
            <button type="button" class="btn btn-primary position-relative">
            Total Events
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {events.length}
            <Card/>
            </span>
            </button>
            </center>
        </div>
    )
}
const mapStateToProps = state => ({
    events : state
})
export default connect(mapStateToProps)(Badge);