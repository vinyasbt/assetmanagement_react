import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
class UpdateAsset extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            // assets:[],
            // updateasset:[] ,
            assetid:'',
            assetname:'',
            assetimg:'',
            assetdes:'',
            quantity:''
           
        }
            
    }
    
    // componentWillMount()
    // {
        
    //     console.log(this.props.match.params.id)
    //     axios.get(`http://localhost:8090/AssetManagement_SpringRest/assets/allasset`)
    //     .then(response => {
    //         console.log(response.data)
    //         this.setState({assets:response.data})
    //         console.log(this.state.assets)
    //         const filteredasset=this.state.assets.filter(asset =>{
    //             return asset.assetid==this.props.match.params.id
    //         })
    //         console.log("filtered data",filteredasset)
    //         this.setState({updateasset:filteredasset[0]})
    //         console.log(this.state.updateasset)
    //     })
    //     .catch(error =>{
    //         console.log("error")
    //     })
        
    // }
    senddata=event=>{
        this.setState({[event.target.name]:event.target.value})
        console.log(event.target)
    }
    submitform=event=>{
        event.preventDefault()
        console.log(this.state)
        axios.put(`http://localhost:8090/AssetManagement_SpringRest/assets/updateasset/${this.props.match.params.id}`,this.state)
        .then(response => {
            alert("asset updated successfully")
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
                    <input type="number" value={this.state.assetid} name="assetid" placeholder={this.props.match.params.id} onChange={this.senddata}  ></input>
                </div>
                <label>
                Asset Name:
                </label>
                <div>
                    <input type="text" value={this.state.assetname} name="assetname"  onChange={this.senddata}></input>
                </div>
                <label>
                Asset image URL:
                </label>
                <div>
                    <input type="text" value={this.state.assetimg} name="assetimg" onChange={this.senddata}></input>
                </div>
                <label>
                Asset Description:
                </label>
                <div>
                    <input type="text" value={this.state.assetdes} name="assetdes"  onChange={this.senddata}></input>
                </div>
                <label>
                Quantity:
                </label>
                <div>
                <input type="number" value={this.state.quantity} name="quantity"  onChange={this.senddata}></input>
                </div>
                <div><button type="submit">Submit</button></div>
            </form>
        </div>
        )
    }
}
export default withRouter(UpdateAsset);