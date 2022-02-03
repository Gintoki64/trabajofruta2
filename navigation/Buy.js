import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BuyScreen from '../container/Buy';

const Stack = createStackNavigator();

export default function BuyStack() {
    return (
      <Stack.Navigator
      screenOptions={{ headerStyle: { backgroundColor: 'papayawhip', padding:10} }}
      >
        <Stack.Screen options={{headerTitleAlign: "center"}} name="Buy" component={BuyScreen} />
      </Stack.Navigator>
    );
}