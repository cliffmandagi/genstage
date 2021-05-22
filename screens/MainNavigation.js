import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {DrawerContent} from './DrawerContent';

import HomeScreen from './HomeScreen';
import SongListScreen from './SongListScreen';
import RequestedSongScreen from './RequestedSongScreen';
import ProfileScreen from './ProfileScreen';

import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

const Home = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeStack"
        component={HomeScreen}
        options={{
          headerTitle: 'Genstage',
          headerLeft: ({color}) => (
            <Icon
              name="ios-menu"
              style={{marginLeft: 5}}
              color={color}
              size={30}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const SongList = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SongListStack"
        component={SongListScreen}
        options={{
          headerTitle: 'Song List',
          headerLeft: ({color}) => (
            <Icon
              name="ios-menu"
              style={{marginLeft: 5}}
              color={color}
              size={30}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const RequestedSong = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RequestedSongStack"
        component={RequestedSongScreen}
        options={{
          headerTitle: 'Requested Song',
          headerLeft: ({color}) => (
            <Icon
              name="ios-menu"
              style={{marginLeft: 5}}
              color={color}
              size={30}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const Profile = ({navigation}) => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="ProfileStack"
          component={ProfileScreen}
          options={{
            headerTitle: 'Profile',
            headerLeft: ({color}) => (
              <Icon
                name="ios-menu"
                style={{marginLeft: 5}}
                color={color}
                size={30}
                onPress={() => navigation.openDrawer()}
              />
            ),
          }}
        />
      </Stack.Navigator>
    );
  };

const Drawer = createDrawerNavigator();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="SongList" component={SongList} />
        <Drawer.Screen name="RequestedSong" component={RequestedSong} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
