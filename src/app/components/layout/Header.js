import Image from 'next/image';
import Logo from './Logo.png';
import styles from './header.module.css';
import { IoSearchOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoPersonOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.headerTop}>
        <div className={styles.sideImage}><Image src={Logo} alt="logo image" /></div>
        <div className={styles.logo}><h1>LOGO</h1></div>
        <div className={styles.headerIcons}>
            <IoSearchOutline size={20}/>
            <IoHeartOutline size={20}/>
            <HiOutlineShoppingBag size={20}/>
            <IoPersonOutline size={20}/> 
           <span className={styles.engArrow}><p>ENG</p> <MdKeyboardArrowDown size={20}/></span> 
        </div>
        </div>

    <div className={styles.headerBottom}>
    <span className={styles.spanHome}>HOME</span>
        <span className={styles.spanShop}>SHOP</span>
        <span className={styles.spanSkills}>SKILLS</span>
        <span className={styles.spanStories}>STORIES</span>
        <span className={styles.spanAbout}>ABOUT</span>
        <span className={styles.spanContact}>CONTACT US</span>
        </div>        

    </div>
  )
}

export default Header
