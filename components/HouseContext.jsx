import React, { useState, useEffect, createContext } from "react";
import { housesData } from "./Data";

export const HouseContext = createContext();
const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Property type (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(false);
  const[query, setQuery] = useState("")

  useEffect(() => {
    const allCountries = houses.map((house) =>{
        return house.country
    })
    const uniqueCountries = [ "Location (any)",...new Set(allCountries)]
    setCountries(uniqueCountries)
  }, [])

  useEffect(() => {
    const allProperties = houses.map((house) =>{
        return house.type
    })
    const uniqueProperties = [ "Property type (any)",...new Set(allProperties)]
    setProperties(uniqueProperties)
  }, [])

  const handleClick = () =>{

    const isDefault = (str) => {
      return str.split(' ').includes('(any)');
    };
    const minPrice = parseInt(price.split(' ')[0]);
    // get last string (price) and parse it to number
    const maxPrice = parseInt(price.split(' ')[2]);
    console.log(minPrice , maxPrice);
    console.log(country);

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);
      // all values are selected
      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }
      // all values are default
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }
      // country is not default
      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }
      // property is not default
      if (!isDefault(property) && isDefault(country) && isDefault(price)) {
        return house.type === property;
      }
      // price is not default
      if (!isDefault(price) && isDefault(country) && isDefault(property)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }
      // country and property is not default
      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property;
      }
      // country and price is not default
      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country;
        }
      }
      // property and price is not default
      if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }
    });
    setHouses(newHouses)
  }
  


  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        houses,
        loading,
        query,
        setQuery,
        handleClick
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
