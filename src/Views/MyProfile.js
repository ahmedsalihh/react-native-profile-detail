import React from 'react';
import {Dimensions, View, Text, StyleSheet, Image} from 'react-native';
// import Map from '../Map';

import MapView, {Marker} from 'react-native-maps';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class MyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 37.78825,
        longitude: 32.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      markers: [
        {
          latitude: 37.78825,
          longitude: 32.4324,
          title: 'Foo Place',
          subtitle: '1234 Foo Drive',
        },
      ],
    };
  }

  static navigationOptions = {
    title: 'MY PROFILE',
    headerTintColor: '#7382f4',
    headerTransparent: true,
  };

  onRegionChange(region) {
    this.setState({region});
  }

  renderMarker = () => {
    return this.state.markers.map(marker => (
      <Marker
        coordinate={{
          latitude: marker.latitude,
          longitude: marker.longitude,
        }}
        title={marker.title}
        description={marker.subtitle}
      />
    ));
  };

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
            <Text style={styles.nameText}>Name</Text>
            <Text
              style={
                styles.nameValue
              }>{`${profile.name.first} ${profile.name.last}`}</Text>
          </View>
        </View>
        <View style={styles.map}>
          <MapView
            region={this.state.region}
            onRegionChange={() => this.onRegionChange.bind(this)}
            style={styles.map}>
            {this.renderMarker()}
          </MapView>
        </View>
        <View style={styles.footerCard}>
          <View style={styles.genderView}>
            <Text style={styles.footerHeaderText}>Gender</Text>
            <Text>{`${profile.gender}`}</Text>
          </View>
          <View style={styles.ageView}>
            <Text style={styles.footerHeaderText}>Age</Text>
            <View style={styles.ageSubView}>
              <Text style={styles.ageText}>{`${profile.dob.age}`}</Text>
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
    marginTop: '15%',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: '3%',
  },
  footerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: '3%',
  },
  map: {
    flex: 1,
    height: height,
    width: width,
  },
  footerHeaderText: {
    color: '#bfbfea',
    fontSize: 20,
  },
  nameText: {color: '#bfbfea'},
  nameValue: {color: '#7382f4', fontSize: 20},
  genderView: {
    width: '30%',
    paddingLeft: '5%',
  },
  ageView: {
    width: '70%',
    paddingLeft: '5%',
  },
  ageSubView: {
    alignItems: 'flex-end',
    marginRight: '5%',
  },
  ageText: {
    color: '#bfbfea',
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
