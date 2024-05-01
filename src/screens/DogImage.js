import React from 'react';
import { View, Image, Text } from 'react-native'; // Import Button
import { DogContext } from '../context/DogContext';

const DogImages = () => {
  const { selectedBreed } = React.useContext(DogContext);

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>

      <Text style={{fontSize:24, fontWeight:'bold'}}>{selectedBreed?.breed}</Text>
      <Image source={{ uri: selectedBreed?.img }} 
       style={{ flex: 1, aspectRatio:16/12}} // Adjust aspect ratio as needed
       resizeMode="cover"
     /> 
    </View>
  );
};

export default DogImages;
