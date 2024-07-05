import styles from  "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return  (
        <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, i am Olayinka</h1>
        <p className={styles.describe}>
            I am a frontend developer with 7 months experience using HTML, CSS and JavaScript, Reach out if you would like to learn more
        </p>
    <a className={styles.btn} href="mailto:adeotihameed90@gmail.com">Contact Me</a>
    </div>
    <img className={styles.heroimg} src={getImageUrl("Hero/yink.png")} alt="" />
    <div className={styles.toolBlur} />
    <div className={styles.bottomBlur} />
</section>
    );
};