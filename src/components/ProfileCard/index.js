import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

class ProfileCard extends React.Component {
  handlePress = () => {
    this.props.handleArrowClick(this.props.profile);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <View>
            <Image
              style={styles.profileAvatar}
              source={{uri: this.props.profile.picture.thumbnail}}
            />
          </View>
          <View>
            <View>
              <Text>{`${this.props.profile.name.first} , ${this.props.profile.dob.age}`}</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity onPress={this.handlePress}>
              <Image
                source={{
                  uri:
                    'https://image.flaticon.com/icons/png/512/130/130884.png',
                }}
                style={styles.rightIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
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
    justifyContent: 'space-between',
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '2%',
    marginBottom: '2%',
  },
  profileAvatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft: '5%',
    marginTop: '3%',
  },
  rightIcon: {
    width: 20,
    height: 20,
  },
});

export default ProfileCard;
