import * as React from 'react';
import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import { ValidateEmail } from '../utils'; // Import the email validation function

const SubscribeScreen = () => {
  const [email, setEmail] = React.useState('');
  const [isSubscribed, setSubscribed] = React.useState(false);

  const subscribe = () => {
    if (ValidateEmail(email)) {
      setSubscribed(true);
      Alert.alert('Subscription Confirmed', `You are now subscribed with email: ${email}`);
    } else {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={{ borderWidth: 1, width: 200, padding: 10 }}
      />
      <Pressable
        onPress={subscribe}
        style={{ marginTop: 20, padding: 10, backgroundColor: 'green' }}
      >
        <Text style={{ color: 'white' }}>Subscribe</Text>
      </Pressable>
    </View>
  );
};

export default SubscribeScreen;
