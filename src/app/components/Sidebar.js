"use client";
import { useState } from 'react';
import styles from './sidebar.module.css';
import { MdKeyboardArrowDown } from "react-icons/md";

const Sidebar = () => {
    const [showOptions,setShowOptions] = useState(false);
  return (
    <div className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
        <input type="checkbox" /> CUSTOMIZABLE</div>
      <ul className={styles.list}>
        <li className={styles.item} onClick={()=>setShowOptions(!showOptions)}><span> <span>IDEAL FOR <p>All</p>
        </span> <MdKeyboardArrowDown/></span>{showOptions && <div>Hello</div>}</li>
       
        <li className={styles.item}><span>OCCASION <p>All</p></span> <MdKeyboardArrowDown/></li>
        <li className={styles.item}><span>WORK <p>All</p></span> <MdKeyboardArrowDown/></li>
        <li className={styles.item}><span>FABRIC <p>All</p></span> <MdKeyboardArrowDown/></li>
        <li className={styles.item}><span>SEGMENT <p>All</p></span> <MdKeyboardArrowDown/></li>
        <li className={styles.item}><span>SUITABLE FOR <p>All</p></span> <MdKeyboardArrowDown/></li>
        <li className={styles.item}><span>RAW MATERIALS <p>All</p></span> <MdKeyboardArrowDown/></li>
        <li className={styles.item}><span>PATTERN <p>All</p></span> <MdKeyboardArrowDown/></li>
      </ul>
    </div>
  )
}

export default Sidebar
