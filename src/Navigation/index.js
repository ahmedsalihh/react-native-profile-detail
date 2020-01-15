import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import MyProfile from '../Views/MyProfile';
import Profiles from '../Views/Profiles';

const AppNavigator = createStackNavigator(
  {
    Profiles: Profiles,
    MyProfile: MyProfile,
  },
  {
    initialRouteName: 'Profiles',
  },
);

export default createAppContainer(AppNavigator);
