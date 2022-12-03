// import React, { useState } from "react";
// import styles from "../styles/searchComponent.module.css";
// import DropDown from "./DropDown";

// function SearchComponent({data}) {
//   const [query, setQuery] = useState("")
//   const houseTypes =["Single Family", "Multi Family", "Condo", "Apartment","Bungalow"]
//   const prices =[1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000]
//   const places = [...new Set(data.map((item)=>{item.location}))]
//   console.log(query)
//   return (
//     <div className={styles.container}>
//       <div className={styles.searchContainer}>
//         <div className={styles.searchTitle}>
//           <h1>Search Properties to rent</h1>
//         </div>
//         <div className={styles.inputContainer}>
//           <input
//             type="text"
//             placeholder="Enter Keywords"
//             className={styles.input}
//             onChange={(e) => setQuery(e.target.value)}
//           />
//         </div>
//       </div>
//       <div className={styles.filter_container}>
//         <div></div>
//         <div className={styles.location_container}>
//           <div className={styles.location}>
//             <DropDown data={data} name="location"options={places}/>
//           </div>
//         </div>
//         <div className={styles.date_filter}></div>
//         <div className={styles.price_filter}>
//           <DropDown name="price"options={prices}/>
//         </div>
//         <div className={styles.type_filter}>
//           <DropDown name="type" options={houseTypes}/>
//         </div>
//         <button className={styles.button}>
//           Search
//         </button>
//       </div>
//     </div>
//   );
// }

// export default SearchComponent;
