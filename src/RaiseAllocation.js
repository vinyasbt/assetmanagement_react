import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
class RaiseAllocation extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
                assetid:'',
                empno:'',
                allocationdate:'',
                releasedate:'',
                quantity:''
        }
    }
    senddata=event=>{
        this.setState({[event.target.name]:event.target.value})
    }
    submitform=event=>{
        event.preventDefault()
        console.log(this.state)
        axios.post(`http://localhost:8090/AssetManagement_SpringRest/assets/raiserequest`,this.state)
        .then(response => {
            console.log("raise requested")
            this.props.history.push("/managerop")
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
                    AssetID:
                    </label>
                    <div>
                        <input type="number" value={this.state.assetid} name="assetid" placeholder="enter asset id" onChange={this.senddata}></input>
                    </div>
                    <label>
                    EmpNo:
                    </label>
                    <div>
                        <input type="number" value={this.state.empno} name="empno" placeholder="enter employee number" onChange={this.senddata}></input>
                    </div>
                    <label>
                    AllocationDate:
                    </label>
                    <div>
                        <input type="date" value={this.state.allocationdate} name="allocationdate" placeholder="enter allocationdate" onChange={this.senddata}></input>
                    </div>
                    <label>
                    ReleaseDate:
                    </label>
                    <div>
                        <input type="date" value={this.state.releasedate} name="releasedate" placeholder="enter releasedate" onChange={this.senddata}></input>
                    </div>
                    <label>
                    Quantity:
                    </label>
                    <div>
                        <input type="number" value={this.state.quantity} name="quantity" placeholder="enter quantity" onChange={this.senddata}></input>
                    </div>
                    <div><button type="submit">Submit</button></div>
                </form>
            </div>
        )
    }
}
export default withRouter(RaiseAllocation);