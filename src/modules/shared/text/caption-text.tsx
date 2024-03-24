import { Typography } from "@mui/material";
import { FC } from "react";
import { CaptionTextProps } from "../types";

const CaptionText: FC<CaptionTextProps> = ({
  text,
  paragraphEnabled,
  isSecondary,
}) => {
  return (
    <Typography
      variant="caption"
      align="center"
      paragraph={paragraphEnabled}
      sx={{
        color: isSecondary ? "text.secondary" : "inherit",
      }}
    >
      {text}
    </Typography>
  );
};

export default CaptionText;
