import React from 'react'
import styles from "../styles/Home.module.css"
import SearchComponent from './SearchComponent'
import Cards from './Cards'
import Search from './Search'
import HouseContext from './HouseContext'


const Home = () => {
    // const data = [
    //     {
    //       id: 1,
    //       image:  "/../assets/house/house1.jpg",
    //       name: "Red Carpet Real Estate",
    //       location: "210 Zirak Road, Canada",
    //       category: "For Rent",
    //       rent: "$3,700",
    //       type: "Apartment",
    //       beds: 2,
    //       bathrooms:1
    //     },
    //     {
    //       id: 2,
    //       image:  "/../assets/house/house2.jpg",
    //       name: "235 Westheimer Rd",
    //       location: "Houston",
    //       category: "For Rent",
    //       rent: "$4500",
    //       type: "Multi Family",
    //       beds: 4,
    //       bathrooms:3
    //     },
    //     {
    //       id: 3,
    //       image:  "/../assets/house/house3.jpg",
    //       name: "1700 Main St #A",
    //       location: "Houston",
    //       category: "For Rent",
    //       rent: "$1500",
    //       type: "Condo",
    //       beds: 1,
    //       bathrooms:1
    //     },
    //     {
    //       id: 4,
    //       image:  "/../assets/house/house4.jpg",
    //       name: "House 4",
    //       location: "New York",
    //       category: "For Rent",
    //       rent: "$3000",
    //       type: "Apartment",
    //       beds: 2,
    //       bathrooms:1
    //     },
    //     {
    //       id: 5,
    //       image:  "/../assets/house/house5.jpg",
    //       name: "house 5",
    //       location: "Road 5,Washington",
    //       category: "For Rent",
    //       rent: "$2500",
    //       type: "Single Family",
    //       beds: 2,
    //       bathrooms:1
    //     },
    //     {
    //       id: 6,
    //       image:  "/../assets/house/house6.jpg",
    //       name: "House 6",
    //       location: "5th street ,Miami",
    //       category: "For Rent",
    //       rent: "$4000",
    //       type: "Bungalow",
    //       beds: 4,
    //       bathrooms:4
    //     },
    //     {
    //       id: 7,
    //       image:  "/../assets/house/house7.jpg",
    //       name: "House 7",
    //       location: "7th street,Boston",
    //       category: "For Rent",
    //       rent: "$3,500",
    //       type: "Multi Family",
    //       beds: 3,
    //       bathrooms:3
    //     },
    //     {
    //       id: 8,
    //       image:  "/../assets/house/house8.jpg",
    //       name: "House 8",
    //       location: "2nd Street,California",
    //       category: "For Rent",
    //       rent: "$2500",
    //       type: "Condo",
    //       beds: 2,
    //       bathrooms:1
    //     },
    //     {
    //       id: 9,
    //       image:  "/../assets/house/house9.jpg",
    //       name: "House 9",
    //       location: "1st Street,Arizona",
    //       category: "For Rent",
    //       rent: "$1250",
    //       type: "Apartment",
    //       beds: 1,
    //       bathrooms:1
    //     },
    //     {
    //       id: 10,
    //       image:  "/../assets/house/house10.jpg",
    //       name: "House 10",
    //       location: "1st Street,New York",
    //       category: "For Rent",
    //       rent: "$3250",
    //       type: "Multi Family",
    //       beds: 3,
    //       bathrooms:2
    //     },
    //   ]
  return (
    <div className={styles.container}>
        <Search />
        <Cards />
    </div>
  )
}

export default Home