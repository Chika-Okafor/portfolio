import { CardHeader, Typography } from "@mui/material";

import styles from "./contact-form-header.module.scss";

const ContactFormHeader = () => {
  return (
    <CardHeader
      title={
        <Typography variant="h5" paragraph>
          CONTACT ME
        </Typography>
      }
      subheader={
        <Typography variant="body1" paragraph>
          Let's create something amazing together!
        </Typography>
      }
      className={styles.contactFormHeader}
      sx={{
        bgcolor: "common.black",
        color: "common.white",
      }}
    />
  );
};

export default ContactFormHeader;
