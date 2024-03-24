import { CardContent } from "@mui/material";
import FooterCopyRightText from "./footer-copyright-text";

import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <CardContent className={styles.footer}>
      <FooterCopyRightText />
    </CardContent>
  );
};

export default Footer;
