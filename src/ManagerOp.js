import React from 'react';
import { Link } from 'react-router-dom';

class ManagerOp extends React.Component{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        return(<div>
            <header>manager operation</header>
            <aside>
                <Link to="/addemployee">Add Employee</Link><br />
                <Link to="/raiseallocation">Raise Allocation</Link><br />
                <Link to="/viewallocationstatus">View Allocation Status</Link>
            </aside>
            </div>)
    }
}
export default ManagerOp;