import React, { useState, useEffect, useContext } from "react";
import { HouseContext } from "./HouseContext";
import styles from "../styles/DropDown.module.css";

const PriceDropdown = () => {
  const prices = [
    {
      value: "Prices (any)",
    },
    {
      value: "100000 - 130000",
    },
    {
      value: "130000 - 160000",
    },
    {
      value: "160000 - 190000",
    },
    {
      value: "190000 - 220000",
    },
    {
      value: "20000 - 30000",
    },
    {
      value: "30000 - 40000",
    },
  ];

  const { price, setPrice } = useContext(HouseContext);
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={styles.dropdown}>
      <div
        className={styles.dropdown_btn}
        onClick={(e) => {
          setIsActive(!isActive);
        }}
      >
        {price}
      </div>

      {isActive && (
        <div className={styles.dropdownContent}>
          {prices.map((type) => {
            return (
              <div
                key={prices.indexOf(type)}
                className={styles.dropdownItem}
                onClick={() => {
                  setPrice(type.value);
                  setIsActive(false);
                }}
              >
                {type.value}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PriceDropdown;
