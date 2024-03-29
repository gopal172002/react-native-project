import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

export default function HomeScreen() {
  return (
    <View >
    <Text>helllloo home</Text>
      <Text >Welcome to HomeScreen</Text>
      <Text >Explore our services and book appointments</Text>
      <View >
        <Button title="Book Now" onPress={() => console.log("Book Now button pressed")} />
      </View>
    </View>
  );
}

