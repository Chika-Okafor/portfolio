import { FormGroup, Stack } from "@mui/material";
import ContactFormTextfield from "./contact-form-textfield";
import ContactFormButton from "./contact-form-button";

import styles from "./contact-form-body.module.scss";

const ContactFormBody = () => {
  return (
    <FormGroup className={styles.contactFormBodyWrapper}>
      <Stack
        direction="row"
        alignItems="center"
        className={styles.contactFormBody}
      >
        <ContactFormTextfield />
        <ContactFormButton />
      </Stack>
    </FormGroup>
  );
};

export default ContactFormBody;
