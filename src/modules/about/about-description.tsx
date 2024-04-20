import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import clsx from "clsx";
import { ABOUT_DESCRIPTION, ABOUT_DESCRIPTION_HEADER } from "./constants";

import styles from "./about-description.module.scss";

const AboutDescription = () => {
  return (
    <Stack className={clsx(styles.aboutDescriptionWrapper, "app-padding")}>
      <Typography className={styles.aboutDescriptionHeader} variant="h5">
        {ABOUT_DESCRIPTION_HEADER}
      </Typography>
      {ABOUT_DESCRIPTION.map((desc) => (
        <Typography
          className={styles.aboutDescription}
          variant="body1"
          paragraph
        >
          {desc}
        </Typography>
      ))}
    </Stack>
  );
};

export default AboutDescription;
