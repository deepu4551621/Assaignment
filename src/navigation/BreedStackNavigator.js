
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack=createNativeStackNavigator()

import DogImages from "../screens/DogImage";
import HomePage from "../screens/HomePage";
const BreedListStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="BreedList"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DogImage"
          component={DogImages}
          options={{ title: 'Dog Images' }}
        />
      </Stack.Navigator>
    );
  };

  export default BreedListStack