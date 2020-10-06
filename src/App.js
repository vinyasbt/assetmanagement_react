import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './Login';
import ManagerOp from './ManagerOp';
import AdminOp from'./AdminOp';
import AddEmployee from './AddEmployee';
import RaiseAllocation from'./RaiseAllocation';
import ViewAllocationStatus from './ViewAllocationStatus';
import AddAsset from './AddAsset';
import SetAllocationStatus from './SetAllocationStatus';
import ViewAllAllocationRequest from'./ViewAllAllocationRequest';
import ViewAllAssets from'./ViewAllAssets';
import UpdateAsset from './UpdateAsset';
// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
  constructor(props)
  {
    super(props)
    
  }
  render()
  {
    return(<div>
      <Router>
      {/* <Login /> */}
      <Switch>
        <Route exact path="/" component={Login}></Route>
      <Route path="/managerop" component={ManagerOp}></Route>
      <Route path="/adminop" component={AdminOp}></Route>
      <Route path="/addemployee" component={AddEmployee}></Route>
      <Route path="/raiseallocation" component={RaiseAllocation}></Route>
      <Route path="/viewallocationstatus" component={ViewAllocationStatus}></Route>
      <Route path="/addasset" component={AddAsset}></Route>
      <Route path="/setallocationstatus" component={SetAllocationStatus}></Route>
      <Route path="/viewallocationrequest" component={ViewAllAllocationRequest}></Route>
      <Route path="/viewallassets" component={ViewAllAssets}></Route>
      <Route path="/updateasset:id" component={UpdateAsset}></Route>
      </Switch>
      </Router>
    </div>)
  }
}
export default App;
