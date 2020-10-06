import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
class ViewAllAllocationRequest extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            requests:[]
        }
    }
    componentWillMount()
    {
        axios.get(`http://localhost:8090/AssetManagement_SpringRest/assets/allassetallocation`)
        .then(response => {
            console.log(response.data[0])
            this.setState({requests:response.data})
            // this.props.history.push("/adminop")
        })
        .catch(error =>{
            console.log("error")
        })
    
    }
    render()
    {
        return(
            <div>VIEW ALL ALLOCATION REQUEST
                <table>
                    <tr>
                        <th>AllocationID</th>
                        <th>AssetID</th>
                        <th>Employee No</th>
                        <th>Allocation Date</th>
                        <th>Release Date</th>
                        <th>Quantity</th>
                    </tr></table>
                  {  this.state.requests.map((request) =><div key={request.id}>
                     <table><tr><td>{request.allocationid}</td>
                  <td>{request.assetid}</td>
                  <td>{request.empno}</td>
                  <td>{request.allocationdate}</td>
                  <td>{request.releasedate}</td>
                  <td>{request.quantity}</td>
                 </tr> </table></div>)}
                
            </div>
        )
    }
}
export default withRouter(ViewAllAllocationRequest);