import { Stack } from "@mui/material";
import CaptionText from "../shared/text/caption-text";
import { getCurrentYear } from "./helpers/get-current-year";
import {
  FOOTER_COPYRIGHT_TEXT_1,
  FOOTER_COPYRIGHT_TEXT_2,
  FOOTER_COPYRIGHT_TEXT_SEPARATOR,
} from "./constants";

import styles from "./footer-copyright.module.scss";

const FooterCopyRight = () => {
  const year = getCurrentYear();
  return (
    <Stack direction="row" className={styles.footerCopyrightWrapper}>
      <CaptionText
        text={<>&copy; {`${year} ${FOOTER_COPYRIGHT_TEXT_1}`}</>}
        isSecondary
      />
      <CaptionText text={FOOTER_COPYRIGHT_TEXT_SEPARATOR} isSecondary />
      <CaptionText text={FOOTER_COPYRIGHT_TEXT_2} isSecondary />
    </Stack>
  );
};

export default FooterCopyRight;
