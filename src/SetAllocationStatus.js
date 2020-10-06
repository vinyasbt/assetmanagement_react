import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
class SetAllocationStatus extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
                allocationid:'',
                status:'',
        }
    }
    senddata=event=>{
        this.setState({[event.target.name]:event.target.value})
    }
    submitform=event=>{
        event.preventDefault()
        console.log(this.state)
        axios.put(`http://localhost:8090/AssetManagement_SpringRest/assets/setstatus`,this.state)
        .then(response => {
            alert("status updated successfully")
            this.props.history.push("/adminop")
            // console.log(response.length)
        })
        .catch(error =>{
            console.log("not added")
        })
    }
    render()
    {
        return(
            <div>
                <form onSubmit={this.submitform}>
                <label>
                    AllocationID:
                    </label>
                    <div>
                        <input type="number" value={this.state.allocationid} name="allocationid" placeholder="enter allocationid" onChange={this.senddata}></input>
                    </div>
                    <label>
                    Status:
                    </label>
                    <div>
                        <input type="text" value={this.state.status} name="status" placeholder="enter status" onChange={this.senddata}></input>
                    </div>
                    <div><button type="submit">Submit</button></div>
                    </form>
                    </div>)
    }
}
export default withRouter(SetAllocationStatus);