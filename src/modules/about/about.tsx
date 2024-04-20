import AboutDescription from "./about-description";
import AboutAvatar from "./about-avatar";

import styles from "./about.module.scss";

const About = () => {
  return (
    <div id="#about" className={styles.about}>
      <AboutAvatar />
      <AboutDescription />
    </div>
  );
};

export default About;
