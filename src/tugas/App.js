import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CoreComponen2 from './CoreComponen2';
import CoreComponen from './CoreComponen';
import CoreComponen3 from './CoreComponen3'




const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="React-native"
        screenOptions={{headerShown:false}}>
        <Stack.Screen name="satu" component={CoreComponen} />
        <Stack.Screen name="Welcome" component={CoreComponen2} />
        <Stack.Screen name="List" component={CoreComponen3} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
