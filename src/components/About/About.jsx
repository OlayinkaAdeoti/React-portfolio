import styles from "./About.module.css"
import { getImageUrl } from "../../utils";

export const About = () => {
   return  (
    <section className={styles.container} id="about">
      <h2 className={styles.title} >About</h2>
      <div className={styles.content}>
         <img src={getImageUrl("about/ykk.png")} alt="my picture"
         className={styles.aboutImage} />
      
   <ul className={styles.aboutItems}>
      <li className={styles.aboutItem}>
         <img src={getImageUrl("about/image 2.png")} alt="cursur icom"/>
         <div className={styles.aboutItemsText}>
            <h1>Frontend developer</h1>
            <p>
               i am a frontend developer with experience in building a good looking and optimized sites
            </p>
         </div>
      </li>
      <li className={styles.aboutItem}>
         <img src={getImageUrl("about/image 3.png")} alt="cursur icom" />
         <div className={styles.aboutItemsText}>
            <h1>Contractor</h1>
            <p>
               i had been involved in several construction project, and also supervised and handled renovations of residential buildings
            </p>
         </div>
      </li>
      <li className={styles.aboutItem}>
         <img src={getImageUrl("about/image 4.png")} alt="cursur icom" />
         <div className={styles.aboutItemsText}>
            <h1>Frontend developer</h1>
            <p>
               i am a frontend developer with experience in building a good looking and optimized sites
            </p>
         </div>
      </li>
   </ul>
   </div>
   </section>
   );

}