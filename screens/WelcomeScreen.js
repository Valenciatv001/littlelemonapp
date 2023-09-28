import * as React from 'react';
import { View, Text, Image, Pressable } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('./path-to-your-logo.png')} />
      <Text>Welcome to Little Lemon</Text>
      <Pressable
        onPress={() => navigation.navigate('Subscribe')}
        style={{ marginTop: 20, padding: 10, backgroundColor: 'orange' }}
      >
        <Text style={{ color: 'white' }}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

export default WelcomeScreen;
