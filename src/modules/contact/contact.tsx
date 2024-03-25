import { Stack } from "@mui/material";
import clsx from "clsx";
import { ContactInfo } from "./contact-info";
import ContactForm from "./contact-form/contact-form";

import styles from "./contact.module.scss";

const Contact = () => {
  return (
    <Stack className={styles.contactWrapper}>
      <Stack className={clsx(styles.contact, "app-padding")}>
        <ContactInfo />
        <ContactForm />
      </Stack>
    </Stack>
  );
};

export default Contact;
