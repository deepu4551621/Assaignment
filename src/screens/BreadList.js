import React, { useContext } from 'react';
import { View, FlatList, Text, Image, Pressable, ScrollView } from 'react-native';
import { DogContext } from '../context/DogContext';
const BreedList = () => {
    const {breeds, setSelectedBreed} =useContext(DogContext)
   
const handleClick=(i)=>{
    setSelectedBreed(i)
}
    const renderItem = ({ item }) => (
        <View style={{ marginVertical: 5 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 26 , color:'purple'}}>{item.breed}</Text>
            {item?.images.length > 0 ? (
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {item?.images.map((image, index) => (
                        <Pressable style={{backgroundColor:'#eee4', margin:10}} key={index} onPress={()=>handleClick(item)}>
                        <Image  source={{ uri: image }}style={{width: 100, height: 100, margin: 5,borderRadius:10, borderWidth:2 }}  />
                        </Pressable>
                    ))}
                </View>
            ) : (
                <Text style={{ marginLeft: 20 }}>No images available</Text>
            )}
        </View>
    );

    return (
        <View style={{ marginTop:10 }}>
            <Text style={{ fontSize:20,color:'blue'}}> All Breedlist</Text>
            <FlatList
                data={breeds}
                renderItem={renderItem}
                keyExtractor={(item) => item.breed}
                initialNumToRender={10}
                
            />
        </View>
    );
};

export default BreedList;
