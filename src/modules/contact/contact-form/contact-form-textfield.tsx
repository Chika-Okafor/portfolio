import { FormControl, InputLabel, Input, Stack } from "@mui/material";

import styles from "./contact-form-textfield.module.scss";

const ContactFormTextfield = () => {
  return (
    <Stack className={styles.contactFormTextfieldWrapper}>
      <FormControl className={styles.contactFormTextfieldControl} fullWidth>
        <InputLabel className={styles.contactFormTextfieldLabel}>
          Sample
        </InputLabel>
        <Input margin="dense" className={styles.contactFormTextfield} />
      </FormControl>
    </Stack>
  );
};

export default ContactFormTextfield;
