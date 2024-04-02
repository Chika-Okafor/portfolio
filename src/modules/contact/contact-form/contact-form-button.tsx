import { Send } from "@mui/icons-material";
import { ButtonBase } from "@mui/material";
import { useToggle } from "react-use";

import styles from "./contact-form-button.module.scss";

const ContactFormButton = () => {
  const [loading, toggleLoading] = useToggle(false);
  const handleSubmit = () => {
    toggleLoading(!loading);
  };

  return (
    <ButtonBase onClick={handleSubmit} className={styles.contactFormButton}>
      <Send />
    </ButtonBase>
  );
};

export default ContactFormButton;
