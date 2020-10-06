import React from 'react';
import { Link } from 'react-router-dom';

class AdminOp extends React.Component{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        return(<div>
            <header>admin operation</header>
            <aside>
                <Link to="/addasset">Add Asset</Link><br />
                <Link to="/setallocationstatus">Set Allocation Status</Link><br />
                <Link to="/viewallocationrequest">View All Allocation Request</Link><br />
                <Link to="/viewallassets">View All Assets</Link>
            </aside></div>)
    }
}
export default AdminOp;