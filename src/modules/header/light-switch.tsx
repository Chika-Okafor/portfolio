import { styled } from "@mui/material/styles";
import { Switch } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../theme/context/theme-provider";
import { LIGHT_SWITCH_THUMB_DARK, LIGHT_SWITCH_THUMB_LIGHT } from "./constants";

const LightSwitch = styled(Switch)(({ theme }) => {
  const { isDark } = useContext(ThemeContext);
  return {
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: LIGHT_SWITCH_THUMB_LIGHT,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: isDark ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: isDark ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
      "&::before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: LIGHT_SWITCH_THUMB_DARK,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: isDark ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  };
});

export default LightSwitch;
