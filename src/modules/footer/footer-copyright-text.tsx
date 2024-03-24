import { Stack, Link } from "@mui/material";
import CaptionText from "../shared/text/caption-text";
import {
  FOOTER_COPYRIGHT_TEXT_1,
  FOOTER_COPYRIGHT_TEXT_2,
  FOOTER_COPYRIGHT_TEXT_SEPARATOR,
  FOOTER_SHOUTOUT_TEXT_1,
  FOOTER_SHOUTOUT_TEXT_2,
  FOOTER_SHOUTOUT_LINK,
} from "./constants";

import styles from "./footer-copyright-text.module.scss";
import { getCurrentYear } from "./helpers/get-current-year";

const FooterCopyRightText = () => {
  const year = getCurrentYear();
  return (
    <Stack gap="1rem" className={styles.footerCopyRightWrapper}>
      <Stack direction="row" alignItems="center">
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
      </Stack>
      <Stack direction="row" alignItems="center" gap={1}>
        <CaptionText
          text={<>&copy; {`${year} ${FOOTER_COPYRIGHT_TEXT_1}`}</>}
          isSecondary
        />
        <CaptionText text={FOOTER_COPYRIGHT_TEXT_SEPARATOR} isSecondary />
        <CaptionText text={FOOTER_COPYRIGHT_TEXT_2} isSecondary />
      </Stack>
      {/* &#x2764; */}
    </Stack>
  );
};

export default FooterCopyRightText;
