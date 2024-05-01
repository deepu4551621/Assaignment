import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigation from './src/navigation/navigate';
import { NavigationContainer } from '@react-navigation/native';
import { DogContextProvider } from './src/context/DogContext';
function App(){
 
  return (
    <SafeAreaProvider>
      <DogContextProvider>
      <NavigationContainer>
      <AppNavigation/>
      </NavigationContainer>
      </DogContextProvider>
    </SafeAreaProvider>
  );
}

export default App;
