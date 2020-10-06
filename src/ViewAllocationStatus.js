import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
class ViewAllocationStatus extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            allocationid:'',
            status:'',
            render:false
        }
    }
    senddata=event=>{
        this.setState({[event.target.name]:event.target.value})
    }
    submitform=event=>{
        event.preventDefault()
        console.log(this.state)
        axios.post(`http://localhost:8090/AssetManagement_SpringRest/assets/viewstatus`,this.state)
        .then(response => {
            console.log(response.data.status)
            this.setState({status:response.data.status})
            this.setState({render:true})
            // this.props.history.push("/managerop")
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
                    <div><button type="submit">Submit</button></div>
                </form>
                {this.state.render && <h1>Status is:{this.state.status}</h1>}
            </div>
        )
    }
}
export default withRouter(ViewAllocationStatus);