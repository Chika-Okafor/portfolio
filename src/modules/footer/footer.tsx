import { Stack } from "@mui/material";
import clsx from "clsx";
import FooterShoutout from "./footer-shoutout";
import FooterCopyRight from "./footer-copyright";

import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <Stack className={clsx(styles.footer)}>
      <Stack
        gap="1rem"
        className={clsx(styles.footerContentWrapper, "app-padding")}
      >
        <FooterShoutout />
        <FooterCopyRight />
      </Stack>
    </Stack>
  );
};

export default Footer;
