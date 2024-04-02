import { Card } from "@mui/material";
import ContactFormHeader from "./contact-form-header";
// import * as LegacyContactForm from "../../contact-form/contact-form";
import ContactFormBody from "./contact-form-body";

import styles from "./contact-form.module.scss";

const ContactForm = () => {
  return (
    // <Stack>
    <Card
      className={styles.contactForm}
      sx={{ borderRadius: "1rem", border: "1px solid primary.main" }}
      // raised
    >
      <ContactFormHeader />
      <ContactFormBody />
    </Card>
    //   <LegacyContactForm />
    // </Stack>
  );
};

export default ContactForm;
