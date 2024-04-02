import { Stack } from "@mui/material";
import { Terminal } from "@mui/icons-material";
import { CONTACT_INFO, SOCIALS } from "../constants";
import ContactInfoList from "./contact-info-list";

import styles from "./contact-info.module.scss";

const ContactInfo = () => {
  return (
    <div className={styles.contactInfoWrapper}>
      <Stack className={styles.contactInfo}>
        <Terminal className={styles.contactInfoIcon} />
      </Stack>
      <ContactInfoList headline="SOCIAL LINKS" list={SOCIALS} />
      <ContactInfoList headline="CONTACT INFO" list={CONTACT_INFO} />
    </div>
  );
};

export default ContactInfo;
