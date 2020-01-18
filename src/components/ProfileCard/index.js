import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
            <View style={styles.nameTextView}>
              <Text
                style={
                  styles.nameText
                }>{`${this.props.profile.name.first} , ${this.props.profile.dob.age}`}</Text>
            </View>
          </View>
          <View>
            <Icon.Button
              name="ios-arrow-forward"
              size={30}
              color='#bfbfea'
              backgroundColor=""
              onPress={this.handlePress}
            />
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
    width: 80,
    height: 80,
    borderRadius: 50,
    marginLeft: '5%',
    marginTop: '3%',
  },
  nameTextView: {
    justifyContent: 'flex-start',
  },
  nameText: {
    color: '#7382f4',
    fontSize: 15,
    fontWeight: 'bold',
  },
  rightIcon: {
    width: 20,
    height: 20,
  },
});

export default ProfileCard;
