import React from "react";
import styles from "../styles/card.module.css";
import Image from "next/image";
import image1 from "../assets/house/house9.jpg";

function Card({ items }) {
  return (
    <>
      {items.map((house) => {
        return <div className={styles.container} key={house.id}>
          <div className={styles.image_container}>
            <Image src ={house.image}className={styles.image} width="320px" height="230px"/>
          </div>

          <div className={styles.content}>
            <div className={styles.rent_container}>
              <span className={styles.rent}><h3 className={styles.rentAmount}>{house.price}</h3></span>
            </div>
            <div className={styles.address_container}>
              <div className={styles.name}>{house.name}</div>
              <div className={styles.address}>{house.address}</div>
              <hr className={styles.breakLine}/>
            </div>
            <div className={styles.footer}>
              <span className="No">{house.bedrooms} Bedrooms</span>
              <span className="No">{house.bathrooms} Bathrooms</span>
            </div>
          </div>
        </div>;
      })}
    </>
  );
}

export default Card;
