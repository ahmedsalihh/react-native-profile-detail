import React from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import socketIOClient from 'socket.io-client';

import ProfileCard from '../components/ProfileCard';

class Profiles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileList: [],
      response: false,
      endpoint: 'http://wunder-provider.herokuapp.com/',
    };
  }

  static navigationOptions = {
    title: 'PROFILES',
    headerTintColor: '#7382f4',
    headerTransparent: true,
  };

  componentDidMount() {
    const {endpoint, profileList} = this.state;
    const socket = socketIOClient(endpoint);
    socket.on('userList', data => {
      profileList.push(data.results[0]);
      this.setState({profileList});
    });
  }

  handleArrowClick = profile => {
    this.props.navigation.navigate('MyProfile', {profile});
  };

  renderProfileCard = () => {
    const {profileList} = this.state;
    return profileList.map((profile, index) => (
      <ProfileCard
        key={index}
        profile={profile}
        handleArrowClick={this.handleArrowClick}
      />
    ));
  };

  render() {
    return (
      <>
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View style={styles.container}>{this.renderProfileCard()}</View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '10%',
  },
  list: {
    // paddingHorizontal: 5,
    backgroundColor: '#E6E6E6',
  },
  listContainer: {
    alignItems: 'center',
  },
});

export default Profiles;
