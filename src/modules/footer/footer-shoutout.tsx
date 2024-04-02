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
            {/* <Link
              href={FOOTER_SHOUTOUT_LINK}
              target="_blank"
              sx={{
                color: "primary.main",
                fontFamily: "Parisienne, cursive",
                fontWeight: 500,
                fontStyle: "normal",
                fontSize: "1.3rem",
                textDecoration: "none",
                cursor: "pointer",
                "&:hover": {
                  textDecoration: "underline",
                  border: "1px solid red",
                },
              }}
              className={styles.footerShoutoutLink}
            >
              {FOOTER_SHOUTOUT_TEXT_2}
            </Link> */}
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
