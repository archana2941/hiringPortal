import React,{Component} from 'react';
import {View,FlatList,Text,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

class Dashboard extends Component {
  isNullOrEmpty = (item) => {
    if(!!item) {
      if (Object.keys(item).length === 0) {
        return true;
      }
    }
    return false;
  }
  cardHeader = ({jobType, location, callCountInfo}) => (
    <View style={styles.cardHeaderWrapper}>
      <View>
        <Text style={styles.jobTypeText}>{jobType}</Text>
        <Text style={styles.locationText}>{location}</Text>
      </View>
      <View style={styles.callCountContainer}>
        <Text style={[styles.callCount,{ color: callCountInfo.foregroundColor}]}>{callCountInfo.count}</Text>
        <Text style={{ color: callCountInfo.foregroundColor}}>{callCountInfo.text}</Text>
      </View>
    </View>
  );

  button = (cta) => {
    const {backgroundColor,foregroundColor,text, borderColor} = cta;
    return (
    <TouchableOpacity style={[styles.buttonWrapper,{backgroundColor: backgroundColor, borderColor: borderColor}]}>
      <Text style={{ color: foregroundColor}}>{text}</Text>
    </TouchableOpacity>
  )};

  ctaView = ({editCta,deactivateCta,viewCta}) => (
    <View style={styles.ctaWrapper}>
      {
        !this.isNullOrEmpty(editCta) && this.button(editCta)
      }
      {
        !this.isNullOrEmpty(deactivateCta) && this.button(deactivateCta)
      }
      {
        !this.isNullOrEmpty(viewCta) && this.button(viewCta)
      }
    </View>
  );

  footer = ({activationStatus,postingStatus}) => {
    const {text,iconColor} = activationStatus;
    return (
      <View style={styles.footerWrapper}>
        <View style={styles.rowWrapper}>
          <Icon name="dot-circle-o" color={iconColor}/>
          <Text style={styles.activationStatus}>{text}</Text>
        </View>
        <View style={styles.rowWrapper}>
          <Text style={styles.postingStatusText}>{postingStatus.text}</Text>
          <Text style={styles.postingStatusDate}>{postingStatus.date}</Text>
        </View>
      </View>
    )
  }
  renderItem = ({item}) => {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.cardSubContainer}>
          {this.cardHeader(item)}
          {this.ctaView(item)}
          {this.footer(item)}
        </View>
      </View>
    )
  }
  showList = (jobList) => {
    return (
      <View style={styles.listWrapper}>
        <FlatList
          data={jobList}
          renderItem={this.renderItem}
          keyExtractor={item => item.id }
        />
      </View>
    )
  }
  showRechargeCard = (walletInfo) => {
    const {header,balance,rechargeCta} = walletInfo;
    return (
      <View style={styles.walletWrapper}>
        <View style={styles.walletCardContainer}>
          <View style={styles.walletSubContainer}>
            <View>
              <Text style={styles.walletHeaderText}>{header}</Text>
              <Text style={styles.walletBalance}>{'\u20B9'}{balance}</Text>
            </View>
            <View style={styles.rechargeCta}>
              {this.button(rechargeCta)}
            </View>
          </View>
        </View>
      </View>
    )
  }
  render() {
    const {walletInfo, jobList} = this.props.data;
    return (
      <View style={styles.container}>
        {this.showRechargeCard(walletInfo)}
        <View style={styles.subContainer}>
          {this.showList(jobList)}
        </View>
      </View>
    )
  }
}
export default Dashboard;