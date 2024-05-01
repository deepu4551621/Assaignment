import axios from 'axios';

const BASE_URL = 'https://dog.ceo/api/';

export const fetchBreedsWithImages = async () => {
  try {
    // Fetch all breeds
    const response = await axios.get(BASE_URL + 'breeds/list/all');
    const breeds = response?.data?.message;

    // Create an array to store breeds along with their images and sub-breeds
    const breedsWithImages = [];

    // Fetch images for each breed and its sub-breeds
    for (const breed in breeds) {
      // Fetch images for the main breed
      const mainBreedImagesResponse = await axios.get(BASE_URL + 'breed/' + breed + '/images');
      const mainBreedImages = mainBreedImagesResponse.data.message;

      // Fetch sub-breeds
      const subBreeds = breeds[breed];

      // Fetch images for each sub-breed
      const subBreedsWithImages = {};
      if (subBreeds.length > 0) {
        for (const subBreed of subBreeds) {
          const subBreedImagesResponse = await axios.get(BASE_URL + 'breed/' + breed + '/' + subBreed + '/images');
          subBreedsWithImages[subBreed] = subBreedImagesResponse.data.message;
        }
      }

      // Store breed with its images and sub-breeds with their images in an object
      const breedWithImages = {
        breed: breed,
        images: mainBreedImages,
        subBreeds: subBreedsWithImages,
      };

      // Push the breed object to the array
      breedsWithImages.push(breedWithImages);
    }

    return breedsWithImages;
  } catch (error) {
    console.error('Error fetching breeds with images:', error);
    return null;
  }
};
