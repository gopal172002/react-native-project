import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import * as WebBrowser from "expo-web-browser";
import color from '../../utils/color'; // Assuming color is a custom module for managing colors
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";

WebBrowser.maybeCompleteAuthSession();

const Login = () => {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow();
   console.log("credential ad is here"+createdSessionId);
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View>
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtXJWHEpv4acECTNInIpsF6tDMlLx_70jkzw&usqp=CAU' }}
        style={styles.loginImage}
      />
      <View style={styles.subcontainer}>
        <Text style={styles.titleText}>Let's find top professional clean services</Text>
        <Text style={styles.boldText}>Get started</Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>ENTER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginImage: {
    width: 400,
    height: 500,
    borderColor: color.BLACK, 
    borderWidth: 1, 
  },
  subcontainer: {
    paddingBottom: '40%',
    marginBottom: -70,
    backgroundColor: color.PRIMARY,
    alignItems: 'center',
    height: '33%',
    borderColor: color.BLACK,
    borderWidth: 0.5,
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
  },
  titleText: {
    textAlign: 'center',
    paddingTop: 0,
    fontSize: 30,
    color: color.WHITE,
    fontWeight: 'bold',
  },
  boldText: {
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 20,
    color: color.WHITE,
  },
  button: {
    backgroundColor: color.PRIMARY,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: "80%", // Adjusted width
    borderRadius: 99, // Changed to borderRadius: 99
  },
});
