import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
class AddEmployee extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
                empno:'',
                ename:'',
                job:'',
                hiredate:'',
                deptid:'',
                mgrno:''
        }
    }
    senddata=event=>{
        this.setState({[event.target.name]:event.target.value})
    }
    backtomanager()
    {
        console.log("back to manager ")
        this.props.history.push("/managerop")
    }
    submitform=event=>{
        event.preventDefault()
        console.log(this.state)
        axios.post(`http://localhost:8090/AssetManagement_SpringRest/assets/addemployee`,this.state)
        .then(response => {
            console.log("employee added")
            alert("employee added successfully")
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
                    EmpNo:
                    </label>
                    <div>
                        <input type="number" value={this.state.empno} name="empno" placeholder="enter employee number" onChange={this.senddata}></input>
                    </div>
                    <label>
                    EmpName:
                    </label>
                    <div>
                        <input type="text" value={this.state.ename} name="ename" placeholder="enter employee name" onChange={this.senddata}></input>
                    </div>
                    <label>
                    Job:
                    </label>
                    <div>
                        <input type="text" value={this.state.job} name="job" placeholder="enter employee job" onChange={this.senddata}></input>
                    </div>
                    <label>
                    HireDate:
                    </label>
                    <div>
                        <input type="date" value={this.state.hiredate} name="hiredate" placeholder="enter Hiredate" onChange={this.senddata}></input>
                    </div>
                    <label>
                    DeptID:
                    </label>
                    <div>
                        <input type="number" value={this.state.deptid} name="deptid" placeholder="enter dept id" onChange={this.senddata}></input>
                    </div>
                    <label>
                    MgrNo:
                    </label>
                    <div>
                        <input type="number" value={this.state.mgrno} name="mgrno" placeholder="enter manager number" onChange={this.senddata}></input>
                    </div>
                    <div><button type="submit">Submit</button></div>
                </form>
                <footer>
                <button onClick={()=>this.backtomanager}>Back to Manager</button> 
                </footer>
            </div>
        )
    }
}
export default withRouter(AddEmployee);