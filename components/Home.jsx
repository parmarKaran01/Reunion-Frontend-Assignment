import React from 'react'
import styles from "../styles/Home.module.css"
import Cards from './Cards'
import Search from './Search'


const Home = () => {
  return (
    <div className={styles.container}>
        <Search />
        <Cards />
    </div>
  )
}

export default Home