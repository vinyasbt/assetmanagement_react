import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
class AddAsset extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
                assetid:'',
                assetname:'',
                assetimg:'',
                assetdes:'',
                quantity:''
        }
    }
    senddata=event=>{
        this.setState({[event.target.name]:event.target.value})
    }
    submitform=event=>{
        event.preventDefault()
        console.log(this.state)
        axios.post(`http://localhost:8090/AssetManagement_SpringRest/assets/add`,this.state)
        .then(response => {
            alert("asset added successfully")
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
                    AssetID:
                    </label>
                    <div>
                        <input type="number" value={this.state.assetid} name="assetid" placeholder="enter asset id" onChange={this.senddata}></input>
                    </div>
                    <label>
                    Asset Name:
                    </label>
                    <div>
                        <input type="text" value={this.state.assetname} name="assetname" placeholder="enter asset name" onChange={this.senddata}></input>
                    </div>
                    <label>
                    Asset image URL:
                    </label>
                    <div>
                        <input type="text" value={this.state.assetimg} name="assetimg" placeholder="enter asset image url" onChange={this.senddata}></input>
                    </div>
                    <label>
                    Asset Description:
                    </label>
                    <div>
                        <input type="text" value={this.state.assetdes} name="assetdes" placeholder="enter description" onChange={this.senddata}></input>
                    </div>
                    <label>
                    Quantity:
                    </label>
                    <div>
                        <input type="number" value={this.state.quantity} name="quantity" placeholder="enter asset quantity" onChange={this.senddata}></input>
                    </div>
                    <div><button type="submit">Submit</button></div>
                </form>
            </div>
        )
    }
}
export default withRouter(AddAsset);
