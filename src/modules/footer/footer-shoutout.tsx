import { Link, Stack } from "@mui/material";
import CaptionText from "../shared/text/caption-text";
import {
  FOOTER_SHOUTOUT_LINK,
  FOOTER_SHOUTOUT_TEXT_1,
  FOOTER_SHOUTOUT_TEXT_2,
} from "./constants";

import styles from "./footer-shoutout.module.scss";

const FooterShoutout = () => {
  return (
    <Stack className={styles.footerShoutoutWrapper}>
      <CaptionText
        text={
          <>
            {FOOTER_SHOUTOUT_TEXT_1}
            <Link href={FOOTER_SHOUTOUT_LINK} target="_blank">
              {FOOTER_SHOUTOUT_TEXT_2}
            </Link>
          </>
        }
      />
      {/* &#x2764; HEART EMOJI */}
    </Stack>
  );
};

export default FooterShoutout;
