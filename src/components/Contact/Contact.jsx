import { getImageUrl } from "../../utils";
 import styles from './Contact.module.css';


export const Contact = () => {
  
    return (
      <>
      <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img className={styles.icon} src={getImageUrl("contact/gmail.png")} alt="Email icon" />
          <a href="mailto:olayinkaadeoti68@gmail.com">olayinkaadeoti68@email.com</a>
        </li>
        <li className={styles.link}>
          <img
          className={styles.icon}
            src={getImageUrl("contact/linkden.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/olayinka-adeoti-ba3198243">linkedin.com/OlayinkAdeoti</a>
        </li>
        <li className={styles.link}>
          <img  className={styles.icon} src={getImageUrl("contact/github.png")} alt="Github icon" />
          <a href="https://github.com/OlayinkaAdeoti">github.com/OlayinkaAdeoti</a>
        </li>
      </ul>

      
    </footer>
    <p className={styles.copy}>All Rights Reserved ||copyright @ {2024}</p>
    </>
  )
};

