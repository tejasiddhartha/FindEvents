import React from 'react';
import { useState } from 'react';
import {connect} from 'react-redux';
import {AddEvent} from './actions';
import { RemoveEvent } from './actions';

const Card = ({events,AddEvent,RemoveEvent}) => {
    const [data,setData] = useState("");
    const submitHandler = async e =>{
        e.preventDefault();
        if(data !== ""){
            await AddEvent({name:data});
            setData("");
        }
        setData("");
    }
    return (
        <center>
            <div class="card" style={{"width": "18rem"}}>
                <div class="card-body">
                    <form onSubmit={submitHandler}>
                    <input type="text" placeholder="Add Events" value={data} onChange={e => setData(e.target.value)}/> <br />
                        <button type="submit" class="btn btn-success">
                        Add Event 
                        </button> 
                    </form>
                    <br />
                    {events.map(event => {
                        return(
                            <div className="data"  >{event.name} 
                            <span onClick={()=> RemoveEvent(event.name)} class="badge square-pill bg-danger" style={{"float": "right","padding":"0px 0px 0px 0px"}}>
                            X</span></div>
                        )
                    })}
                </div>
            </div>
        </center>
    )
}

const mapStateToProps = (state) =>({
    events: state
})

export default connect(mapStateToProps,{AddEvent,RemoveEvent})(Card);