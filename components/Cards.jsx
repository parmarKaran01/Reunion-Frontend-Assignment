import React, { useContext } from "react";
import styles from "../styles/cards.module.css";
import Card from "./Card";
import { HouseContext } from "./HouseContext"

function Cards() {
  const {houses} = useContext(HouseContext)
  return (
    <div className={styles.container}>
        <Card items= {houses}/>
    </div>
  );
}

export default Cards;
