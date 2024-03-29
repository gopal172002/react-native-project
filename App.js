import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { SecureStore } from 'expo-secure-store'; // Add this import
import Login from './App/screens/LoginScreen/Login.jsx';
import ToNavigate from './App/navigations/TabNavigation.jsx'; // Remove curly braces

const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function App() {
  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey='pk_test_ZGVhci1sYWNld2luZy01LmNsZXJrLmFjY291bnRzLmRldiQ'>
      <View style={styles.container}>
        <Text>..WELCOME.. </Text>

        <SignedIn>
          <Text>You are Signed in</Text>
        </SignedIn>
        <SignedOut>
          <NavigationContainer>
            <ToNavigate />
          <Login />
          </NavigationContainer>
        </SignedOut>
        <StatusBar style="auto" />
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 200,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
