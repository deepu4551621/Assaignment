import React, { useContext , useEffect} from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet, Button } from 'react-native';
import { DogContext } from '../context/DogContext'; // Assuming DogContext provides breeds data
import BreedItem from './SingleBreed';
import { fetchBreedsWithImages } from '../utils/api';
import BreedList from './BreadList';
const HomePage = () => {
    const {breeds, setBreeds, setSelectedBreed} =useContext(DogContext)
  useEffect(() => {
    // Fetch data when component mounts
    const fetchData = async () => {
      try {
        const data = await fetchBreedsWithImages();
        setBreeds(data);
      } catch (error) {
        console.error('Error fetching breeds with images:', error);
      }
    };

    fetchData();
    
  }, []);
  
  const handleFilter = (breed) => {
    const filteredBreed = breeds?.find((b) => b.breed === breed.breed);
    setSelectedBreed(filteredBreed); 
  };

  
  return (
    <View>
     <View style={{height:60}}>
     <ScrollView horizontal
      style={{backgroundColor:'#d2e1da'}}
      >
        {breeds && breeds.map((item, index) => (
          <Pressable key={index} onPress={() => handleFilter(item)}>
            <Text style={styles.text} >
              {item.breed}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
     </View>
     <BreedItem  />
     <BreedList/>
    </View>
  );
};

const styles =StyleSheet.create({
    text:{
        margin: 10,fontSize:18, padding: 10, backgroundColor: '#eee4',
        color: '#000',borderRadius:10,textTransform:'uppercase'
    }
})
export default HomePage;
