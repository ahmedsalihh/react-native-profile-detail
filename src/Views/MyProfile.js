import React from 'react';
import {Button, View, Text, StyleSheet, Image} from 'react-native';

class MyProfile extends React.Component {
  render() {
    const {navigation} = this.props;
    const {profile} = navigation.state.params;
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <View>
            <Image
              style={styles.profileAvatar}
              source={{uri: profile.picture.thumbnail}}
            />
          </View>
          <View>
            <Text>Name</Text>
            <Text>{`${profile.name.first} ${profile.name.last}`}</Text>
          </View>
        </View>
        <View style={styles.footerCard}>
          <View style={styles.genderView}>
            <Text style={styles.footerHeaderText}>Gender</Text>
            <Text>{`${profile.gender}`}</Text>
          </View>
          <View style={styles.ageView}>
            <Text style={styles.footerHeaderText}>Age</Text>
            <View style={styles.ageText}>
              <Text>{`${profile.dob.age}`}</Text>
            </View>
          </View>
        </View>
        {/* <Text>Details Screen</Text>
        <Text>{JSON.stringify(profile)}</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('MyProfile', {profile})}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Profiles')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  footerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  footerHeaderText: {
    fontSize: 20,
  },
  genderView: {
    // borderStyle: 'solid',
    // borderRightColor: '#fff',
    // borderWidth: 1,
    width: '30%',
    paddingLeft: '5%',
  },
  ageView: {
    // borderStyle: 'solid',
    // borderRightColor: '#fff',
    // borderWidth: 1,
    width: '70%',
    paddingLeft: '5%',
  },
  ageText: {
    alignItems: 'flex-end',
    marginRight: '5%',
  },
  profileAvatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginLeft: '20%',
    marginTop: '5%',
  },
});

export default MyProfile;
