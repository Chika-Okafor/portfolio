import { Avatar, Typography } from "@mui/material";
import { Stack } from "@mui/system";

import { ADMIN_FULL_NAME, ADMIN_ROLE } from "../../constants";

import profileImage from "../../assets/img/profile-img.png";

import styles from "./about-avatar.module.scss";

const AboutAvatar = () => {
  return (
    <Stack className={styles.aboutAvatarWrapper} bgcolor="background.paper">
      <Avatar
        className={styles.aboutAvatar}
        alt="Chika Okafor"
        src={profileImage}
        sx={{ backgroundColor: "yellow" }}
      />
      <Stack className={styles.aboutAvatarText}>
        <Typography className={styles.aboutAvatarName} align="center">
          {ADMIN_FULL_NAME}
        </Typography>
        <Typography className={styles.aboutAvatarRole} align="center">
          {ADMIN_ROLE}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default AboutAvatar;
