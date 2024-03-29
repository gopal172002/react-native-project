import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native'; // Added Button from react-native

export default function BookingScreen() {
  const handleBooking = () => {
    // Functionality to handle booking
    console.log('Booking handled');
  };
  return (
    <View >
<Text>helllloo home</Text>
      <Text >Booking</Text>
      <Text >
        Welcome to the booking screen. Here you can book various services.
      </Text>
      <Button title="Book Now" onPress={handleBooking} /> {/* Added a Button component */}
    </View>
  );
}
