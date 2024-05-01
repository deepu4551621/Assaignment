import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ContactForm from '../screens/ContactForm';
import BreedListStack from './BreedStackNavigator';
const BottomTab = createBottomTabNavigator();


const AppNavigation = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const icons = {
            BreadList: 'dog',
            Contact: 'address-book'
          };
          const iconName = icons[route.name];
          return <Icon name={iconName} color={color} size={size} />;
        },
      })}
    >
      <BottomTab.Screen
        name="BreadList"
        component={BreedListStack}
        options={{headerShown:false}}
      />
      <BottomTab.Screen
        name="Contact"
        component={ContactForm}
      />
    </BottomTab.Navigator>
  );
};

export default AppNavigation;
