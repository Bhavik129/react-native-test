import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Antdesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import React from 'react';
import HustleScreen from '../Screens/HustleScreen';
import CustomTabBar from '../Components/CustomTabBar';
import StackNavigator from './StackNavigator';
import {View, Text, StyleSheet} from 'react-native';

export default function Tabnavigator() {
  const Tab = createBottomTabNavigator();
  const setTabIcon = (route, focused) => {
    switch (route.name) {
      case 'Screen1':
        return (
          <Icon
            name="home-outline"
            size={40}
            color={focused ? '#FF9209' : '#F1EFEF'}
          />
        );
      case 'Screen2':
        return (
          <Fontisto
            name="comment"
            size={30}
            color={focused ? '#FF9209' : '#F1EFEF'}
          />
        );
      case 'Screen3':
        return (
          <Ionicons
            name="layers-outline"
            size={30}
            color={focused ? '#FF9209' : '#F1EFEF'}
          />
        );
      case 'Screen4':
        return (
          <Ionicons
            name="notifications-outline"
            size={30}
            color={focused ? '#FF9209' : '#F1EFEF'}
          />
        );
      default:
        // return (
        //   <View
        //     style={{
        //       flexDirection: 'row',
        //       borderWidth: 1,
        //       bottom: 20,
        //       alignContent: 'center',
        //     }}>
        //     <Icon
        //       name="plus-outline"
        //       size={40}
        //       color={'gold'}
        //       style={{borderWidth: 1, borderColor: 'red'}}
        //     />
        //     <Icon
        //       name="plus-outline"
        //       size={40}
        //       color={'gold'}
        //       style={{borderWidth: 1, borderColor: 'red', padding: 0}}
        //     />
        //   </View>
        // );
        return (
          <Antdesign
            name="pluscircleo"
            size={40}
            color={focused ? '#FF9209' : '#F1EFEF'}
            style={{bottom: 20}}
          />
        );
    }
  };
  const Emptyscreen = title => (
    <View style={styles.container}>
      <Text style={styles.tabTitle}>{title}</Text>
    </View>
  );
  return (
    <Tab.Navigator
      initialRouteName="HustleScreen"
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          return setTabIcon(route, focused);
        },
        tabBarStyle: {
          backgroundColor:
            Platform.OS === 'android' ? 'transparent' : 'transparent',
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: 'orange',
      })}>
      <Tab.Screen name="Screen1" component={() => Emptyscreen('Home')} />
      <Tab.Screen name="Screen2" component={() => Emptyscreen('Messages')} />
      <Tab.Screen
        name="HustleScreen"
        component={HustleScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="Screen3" component={StackNavigator} />
      <Tab.Screen
        name="Screen4"
        component={() => Emptyscreen('Notification')}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  tabTitle: {textAlign: 'center', fontSize: 15, fontWeight: '800'},
});
