import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

export default function ProfileScreen() {
  return (
    <View >
   <Text>helllloo home</Text>
      {/* <Image
        source={require('../../assets/profile_image.png')} // Assuming you have a profile image in your assets folder
        style={styles.profileImage}
      /> */}
      <Text >Welcome to Your Profile</Text>
      <Text >View and manage your account information here</Text>
    </View>
  );
}
