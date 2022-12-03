// import React,{ useState } from "react";
// import styles from "../styles/DropDown.module.css"

// const DropDown = ({ name, options, setValue }) => {
//     const [isActive, setIsActive] = useState(false)
//   return <div className={styles.dropdown}>
//     <div className={styles.dropdown_btn} onClick={(e) =>{
//         setIsActive(!isActive)
//     }}>{name}</div>

//     {
//         isActive && (<div className={styles.dropdownContent}>
//             {options.map((type)  =>{
//                 return(<div className={styles.dropdownItem} onClick={()=>{setValue(name)}}>{type}</div>)
//             })}
//         </div>)
//     }
    
//   </div>
// };

// export default DropDown;
