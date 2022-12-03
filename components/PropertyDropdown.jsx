import React, { useContext, useState, useEffect } from "react";
import { HouseContext } from "./HouseContext";
import styles from "../styles/Dropdown.module.css";

const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext);
  // console.log(property);
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={styles.dropdown}>
      <div
        className={styles.dropdown_btn}
        onClick={(e) => {
          setIsActive(!isActive);
        }}
      >
        {property}
      </div>

      {isActive && (
        <div className={styles.dropdownContent}>
          {properties.map((type) => {
            return (
              <div
                key={properties.indexOf(type)}
                className={styles.dropdownItem}
                onClick={() => {
                  setProperty(type);
                  setIsActive(false);
                }}
              >
                {type}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PropertyDropdown;
