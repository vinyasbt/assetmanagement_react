import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
class ViewAllAssets extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            assets:[]
        }
    }
    componentWillMount()
    {
        axios.get(`http://localhost:8090/AssetManagement_SpringRest/assets/allasset`)
        .then(response => {
            console.log(response.data)
            this.setState({assets:response.data})
            // this.props.history.push("/adminop")
        })
        .catch(error =>{
            console.log("error")
        })
    
    }
    updateasset(id)
    {
        console.log(id)
        this.props.history.push("/updateasset"+id)
    }
    deleteasset(data)
    {
        console.log(data)
        axios.delete(`http://localhost:8090/AssetManagement_SpringRest/assets/delete/${data.assetid}`)
        .then(response => {
            console.log(response.data)
            alert("item deleted")
            window.location.reload()
            // this.setState({assets:response.data})
           
        })
        .catch(error =>{
            console.log("error")
            
            //   this.props.history.push("/adminop")
        })
    
        
    }
    render()
    {
        return(
            <div>
                View All Assets
                <table>
                    <tr>
                        <th className="heading">assetid</th>
                        <th className="heading">assetname</th>
                        <th className="heading">assetdes</th>
                        <th className="heading">quantity</th>
                        <th className="heading">status</th>
                        <th className="heading">assetimgurl</th></tr></table>
                        {  this.state.assets.map((asset) =><div key={asset.id}>
                    <table><tr><td className="data">{asset.assetid}</td>
                  <td className="data">{asset.assetname}</td>
                  <td className="data">{asset.assetdes}</td>
                  <td className="data">{asset.quantity}</td>
                  <td className="data">{asset.status}</td>
                  <td className="data"><img src={asset.assetimg} /></td>
                  <td className="data"><button onClick={()=>this.updateasset(asset.assetid)}>Update</button></td>
                  <td className="data"><button onClick={()=>this.deleteasset(asset)}>Delete</button></td>
                 </tr> </table> </div>)}
                
            </div>)
    }
}
export default withRouter(ViewAllAssets);