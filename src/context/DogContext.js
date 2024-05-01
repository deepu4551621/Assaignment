import React, { createContext, useState } from 'react';

const DogContext = createContext();

const DogContextProvider = ({ children }) => {
  const [breeds, setBreeds] = useState([]);
const [selectedBreed, setSelectedBreed]=useState({})
  return (
    <DogContext.Provider value={{ breeds, setBreeds, selectedBreed, setSelectedBreed }}>
      {children}
    </DogContext.Provider>
  );
};

export { DogContextProvider, DogContext };