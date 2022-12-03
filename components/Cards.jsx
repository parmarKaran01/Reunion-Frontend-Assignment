import React, { useContext } from "react";
import styles from "../styles/cards.module.css";
import Card from "./Card";
import { HouseContext } from "./HouseContext"
// import data from "../components/Data"

// export const getStaticProps = async() => {
//   const url =
//     "https://real-estate-usa.p.rapidapi.com/api/v1/properties?postal_code=94105&offset=0&limit=200";

//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "ad08406270msh2bf0eed493b75a5p1c21a5jsn397e56656cef",
//       "X-RapidAPI-Host": "real-estate-usa.p.rapidapi.com",
//     },
//   };

//   const res = await fetch(url, options)

//     const data = await res.json()
//   return({
//     props:{
//         data: data
//     }
//   })
// };

// id,image, rent, name, location, beds, bathrooms

function Cards() {
  const {houses} = useContext(HouseContext)
  return (
    <div className={styles.container}>
        <Card items= {houses}/>
    </div>
  );
}

export default Cards;
