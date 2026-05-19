import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';

import { responsiveFontSize } from '../utils/helper';

/**
 * SVG Icons
 */
import HomeOff from '../assets/icons/homeOff.svg';
import EventsOn from '../assets/icons/eventsOn.svg';
import FeedOff from '../assets/icons/feedOff.svg';
import LeagueOff from '../assets/icons/leagueOff.svg';
import ProfileOff from '../assets/icons/profileOff.svg';
import { EventsScreen } from '../screens/bottomTabs/Event';

const Tab = createBottomTabNavigator();

const ScreenWrapper = ({ title }: { title: string }) => (
  <View style={styles.screen}>
    <Text style={styles.text}>{title}</Text>
  </View>
);

const HomeScreen = () => <ScreenWrapper title="Home" />;
// const EventsScreen = () => <ScreenWrapper title="Events" />;
const FeedScreen = () => <ScreenWrapper title="Feed" />;
const LeagueScreen = () => <ScreenWrapper title="League" />;
const ProfileScreen = () => <ScreenWrapper title="Profile" />;

export const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        tabBarStyle: styles.tabBar,

        tabBarLabelStyle: styles.label,

        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: '#7A7A7A',

        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <HomeOff
                width={22}
                height={22}
                opacity={focused ? 1 : 0.5}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Events"
        component={EventsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <EventsOn
                width={22}
                height={22}
                opacity={focused ? 1 : 0.5}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <FeedOff
                width={22}
                height={22}
                opacity={focused ? 1 : 0.5}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="League"
        component={LeagueScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <LeagueOff
                width={22}
                height={22}
                opacity={focused ? 1 : 0.5}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <ProfileOff
                width={22}
                height={22}
                opacity={focused ? 1 : 0.5}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  text: {
    fontSize: responsiveFontSize(20),
    fontWeight: '600',
    color: '#000',
  },

  tabBar: {
    height: 80,

    paddingBottom: 12,
    paddingTop: 10,

    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 18,

    borderRadius: 100,

    backgroundColor: '#FFFFFF',

    borderTopWidth: 0,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },

    shadowOpacity: 0.1,
    shadowRadius: 10,

    elevation: 5,
  },

  label: {
    fontSize: responsiveFontSize(11),
    fontWeight: '600',
    marginTop: -2,
  },

  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
});