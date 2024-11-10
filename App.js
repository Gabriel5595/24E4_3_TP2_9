import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PostList from './components/PostList';
import PostDetails from './components/PostDetail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PostList">
        <Stack.Screen name="PostList" component={PostList} options={{ title: 'Lista de Postagens' }} />
        <Stack.Screen name="PostDetails" component={PostDetails} options={{ title: 'Detalhes da Postagem' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}