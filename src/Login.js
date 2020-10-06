import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

class Login extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            userid:'',
            userpassword:''
        }
        
    }
    
    submitdata=event=>{
        this.setState({[event.target.name]:event.target.value})
    }
    submitform=event=>{
        event.preventDefault()
        console.log(this.state)
        axios.post(`http://localhost:8090/AssetManagement_SpringRest/assets/login`,this.state)
        .then(response =>{
            console.log(response.data.usertype)
            if(response.data.usertype=="manager")
            {
                console.log("manager")
                // alert("manager")
                console.log(this.props.history)
                 this.props.history.push("/managerop")
                 
            }
            else if(response.data.usertype=="admin"){
                console.log("admin")
                this.props.history.push("/adminop")
            }
            else{
                alert("enter valid data")
            }
        })
        .catch(error =>{
            console.log(error)
            alert("enter valid data")
        })
    }
   
    render()
    {
        return(
            <div className="card">
                <form className="card-body" onSubmit={this.submitform}>
                    <label >UserID:</label>
                    <div><input type="text" name="userid" value={this.state.userid} placeholder="enter your userid" onChange={this.submitdata}></input></div>
                    <label>Password:</label>
                    <div><input type="password" name="userpassword" value={this.state.userpassword} placeholder="enter your password" onChange={this.submitdata}></input></div>
                    <button  className="btn btn-primary"type="submit">Login</button>
                </form>
            </div>
        )
    }
} 
export default withRouter(Login);