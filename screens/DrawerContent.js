import React from 'react';
import {View, Stylesheet, StyleSheet, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent({navigation, props}) {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <View style={{flex: 1}}>
      <Drawer.Section>
        <View style={styles.userInfoSection}>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <Avatar.Image
              source={{
                uri: 'https://api.adorable.io/avatars/50/abott@adorable.png',
              }}
              size={50}
            />
            <View style={{marginLeft: 15, flexDirection: 'column'}}>
              <Title style={styles.title}>McCliff Mandagi</Title>
              <Caption style={styles.caption}>Vocalist</Caption>
            </View>
          </View>
        </View>
      </Drawer.Section>
      <DrawerContentScrollView {...props}>
        <Drawer.Section>
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="home-outline" color={color} size={size} />
            )}
            label="Home"
            onPress={() => navigation.navigate('Home')}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="book-music" color={color} size={size} />
            )}
            label="Song List"
            onPress={() => navigation.navigate('SongList')}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="music" color={color} size={size} />
            )}
            label="Requested Song"
            onPress={() => navigation.navigate('RequestedSong')}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="account-edit-outline" color={color} size={size} />
            )}
            label="Edit Profile"
            onPress={() => navigation.navigate('Profile')}
          />
        </Drawer.Section>
        <Drawer.Section title="Preferences">
          <TouchableRipple
            onPress={() => {
              toggleTheme();
            }}>
            <View style={styles.preference}>
              <Caption style={{fontSize: 14}}>Dark Theme</Caption>
              <View pointerEvents="none">
                <Switch value={isDarkTheme} />
              </View>
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </DrawerContentScrollView>
      <Drawer.Section
        style={
          (styles.bottomDrawerSection,
          {justifyContent: 'center', alignSelf: 'center'})
        }>
        <Caption>Version 1.0.0</Caption>
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
