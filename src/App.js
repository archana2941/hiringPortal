import React, {Component} from 'react';
import { SafeAreaView } from 'react-navigation';
import DashboardContainer from './screens/Dashboard/DashboardContainer';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
      <DashboardContainer/>
      </SafeAreaView>
    );
  }
}

