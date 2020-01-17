import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMapReady: false,
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
  onRegionChange(region) {
    this.setState({region});
  }
  getInitialState() {
    return {
      region: {
        latitude: 37.78825,
        longitude: 32.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }

  onMapLayout = () => {
    this.setState({isMapReady: true});
  };

  renderMarker = () => {
    if (this.state.isMapReady) {
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
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          region={this.state.region}
          onRegionChange={this.onRegionChange}
          style={styles.map}>
          {this.renderMarker()}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    height: height,
    width: width,
  },
});

export default Map;
