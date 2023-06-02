import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from './Pages/HomePage';
import Select from './Pages/Select';
import Detail from './Pages/Detail';
import Quiz from './Pages/Quiz';
import LessonSummary from './Pages/LessonSummary';

const Stack = createStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Subject" component={Select} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Lesson" component={LessonSummary} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
