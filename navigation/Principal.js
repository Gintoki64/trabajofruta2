import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PrincipalScreen from '../container/Principal';

const Stack = createStackNavigator();

export default function PrincipalStack() {
    return (
      <Stack.Navigator
      screenOptions={{ headerStyle: { backgroundColor: 'papayawhip' } }}
      >
        <Stack.Screen options={{headerTitleAlign: "center",}} name="Principal" component={PrincipalScreen} />
      </Stack.Navigator>
    );
}