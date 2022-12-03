import React, { useContext, useState } from "react";
import LocationDropdown from "./LocationDropdown";
import PriceDropdown from "./PriceDropdown";
import PropertyDropdown from "./PropertyDropdown";
import styles from "../styles/SearchComponent.module.css";
import { HouseContext } from "./HouseContext";

const Search = () => {
  const{ query, setQuery, handleClick} = useContext(HouseContext)
  console.log(query)
  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <div className={styles.searchTitle}>
          <h1>Search Properties to rent</h1>
        </div>
        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="Enter Keywords"
            className={styles.input}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.filter_container}>
        <div className={styles.location_filter}>
          <LocationDropdown />
        </div>
        <div className={styles.price_filter}>
          <PriceDropdown />
        </div>
        <div className={styles.type_filter}>
          <PropertyDropdown />
        </div>
        <button className={styles.button} onClick={() => handleClick()}>Search</button>
      </div>
      </div>
    
  );
};

export default Search;
