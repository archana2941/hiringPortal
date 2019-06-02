import React,{Component} from 'react';
import Dashboard from './Dashboard';
import dummyData from './dummyData';

class DashboardContainer extends Component {
  render(){
    return(
      <Dashboard data={dummyData}/>
    )
  }
}
export default DashboardContainer;