import React from 'react';
import { View, Text, Image, FlatList, Pressable } from 'react-native';
import { DogContext } from '../context/DogContext';
import { useNavigation } from '@react-navigation/native';
const BreedItem = () => {
  const { selectedBreed, setSelectedBreed} = React.useContext(DogContext)
  const navigation=useNavigation()
  const handleClick = (item) => {
    setSelectedBreed({
      breed:selectedBreed.breed,
      img:item
    })
    navigation.navigate('DogImage')
  };

  const renderItem = ({ item }) => (
    <View style={{ marginVertical: 1, backgroundColor:'#ccc', borderRadius:15 }}>
            <Pressable onPress={() => handleClick(item)}>
              <Image source={{ uri: item }} style={{ width: 150,height:150, margin: 5, borderRadius: 10, borderWidth: 2 }} />
            </Pressable>
    </View>
  );


  return (
   selectedBreed&&(
    <View >
    <Text style={{ fontWeight: 'bold', fontSize: 24, textAlign:'center' }}>{selectedBreed?.breed}</Text>
    <FlatList
      horizontal
      data={selectedBreed.images}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  </View>
   )
  );
};

export default BreedItem;
