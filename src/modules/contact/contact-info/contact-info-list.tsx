import { Typography, Stack } from "@mui/material";
import { FC } from "react";

import styles from "./contact-info-list.module.scss";

export interface ContactInfoListProps {
  headline: string;
  list: string[];
}

const ContactInfoList: FC<ContactInfoListProps> = ({ headline, list }) => {
  return (
    <Stack className={styles.contactInfoListWrapper}>
      <Typography variant="subtitle2" className={styles.contactInfoListHeader}>
        {headline}
      </Typography>
      <Stack className={styles.contactInfoList}>
        {list.map((item) => (
          <Typography
            key={item}
            variant="body2"
            className={styles.contactInfoListItem}
          >
            {item}
          </Typography>
        ))}
      </Stack>
    </Stack>
  );
};

export default ContactInfoList;
