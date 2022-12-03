import React from "react";
import styles from "../../styles/Navbar.module.css";
import Image from "next/image";
import House from "../../assets/navbar images/house.svg";
function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_left}>
        <Image
          src={House}
          alt=""
          width={35}
          height={35}
          className={styles.house_logo}
        />
        <h2 className={styles.title}>Reunion</h2>
      </div>
      <div className={styles.navbar_right}>
        <ul className={styles.links}>
          <li className={styles.link}>Rent</li>
          <li className={styles.link}>Buy</li>
          <li className={styles.link}>Sell</li>
          <li className={styles.link}>About Us</li>
        </ul>

        <button className={styles.signup}>Sign Up</button>
      </div>

      {/* <div className={styles.toggle}>
        <button className={styles.toggle_btn}>
          <i className="fa fa-bars"></i>
        </button>
      </div> */}
    </div>
  );
}

export default Navbar;
