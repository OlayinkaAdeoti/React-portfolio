import {useState} from "react";
import styles from "./Navbar.module.css"
import { getImageUrl } from "../../utils";

export const Navbar = () => {
const [menuOpen, setMenuOpen] = useState(false);
return  <nav className={styles.navbar}>
<h1><a className={styles.title} href="">Portfolio</a> </h1>
<div className={styles.menu}>
    <img src={menuOpen ? 
        getImageUrl("Nav/cancel.png") 
        : getImageUrl("Nav/hamburger-menu.png")}
     className={styles.menuBtn} 
    alt="menu-button" 
     onClick={() => setMenuOpen(!menuOpen)}
    />
    <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
        <li>
            <a href="#about">About</a>
        </li>
        <li>
            <a href="#experience">Experience</a>
        </li>
        <li>
            <a href="#projects">Projects</a>
        </li>
        <li>
            <a href="#contact">Contacts</a>
        </li>
    </ul>
</div>
</nav>; 

};