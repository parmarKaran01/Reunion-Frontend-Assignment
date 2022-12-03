import React, { useContext, useState, useEffect } from "react";
import { HouseContext } from "./HouseContext";
import DropDown from "./DropDown";
import styles from "../styles/DropDown.module.css"

const LocationDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext);
  const [isActive, setIsActive] = useState(false);
  // console.log(countries);
  return (
    <div>
      <div className={styles.dropdown}>
        <div
          className={styles.dropdown_btn}
          onClick={(e) => {
            setIsActive(!isActive);
          }}
        >
          {country}
        </div>

        {isActive && (
          <div className={styles.dropdownContent}>
            {countries.map((type, id) => {
              return (
                <div
                key={id}
                  className={styles.dropdownItem}
                  onClick={() => {
                    setCountry(type);
                    // console.log(type);
                    setIsActive(false)
                  }}
                >
                  {type}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationDropdown;
