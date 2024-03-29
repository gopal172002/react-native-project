import React from 'react';
import { StyleSheet ,Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  HomeScreen  from '../screens/HomeScreen/Homescreen.jsx';
import  BookingScreen  from '../screens/BookingScreen/BookingScreen.jsx';
import  ProfileScreen  from '../screens/ProfileScreen/profilescreen.jsx';
import color from '../utils/color.js';
import { Entypo } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
export default function ToNavigate() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false,tabBarActiveTintColor:color.PRIMARY}}>
      <Tab.Screen name='Home' component={HomeScreen}
      options={{
        tabBarLabel:({color})=>(
          <Text styles={{color:color,fontsize:12,marginTop:-7,}}>Home</Text>
        ),
        tabBarIcon:({color,size})=>(
          <Entypo name="home" size={size} color={color} />
        )
      }}
       />
      <Tab.Screen name='Booking' component={BookingScreen}
       options={{
        tabBarLabel:({color})=>(
          <Text styles={{color:color,fontsize:12,marginTop:-7,}}>Home</Text>
        ),
        tabBarIcon:({color,size})=>(
          <Entypo name="bookmark-alt" size={size} color={color} />
        )
      }}
       />
      <Tab.Screen name='Profile' component={ProfileScreen} 
 options={{
        tabBarLabel:({color})=>(
          <Text styles={{color:color,fontsize:12,marginTop:-7,}}>Home</Text>
        ),
        tabBarIcon:({color,size})=>(
          <Entypo name="manage-accounts" size={size} color={color} />
        )
      }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
