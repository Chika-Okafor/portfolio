import { useCallback } from "react";
import { useAppDispatch } from "../../store/use-app-dispatch";
import { setDarkTheme, setLightTheme } from "../store/actions";
import { useAppSelector } from "../../store/use-app-selector";
import { getTheme } from "../store/selectors";

const useTheme = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(getTheme);

  const handleToggleLightTheme = useCallback(() => {
    dispatch(setLightTheme());
  }, [dispatch]);

  const handleToggleDarkTheme = useCallback(() => {
    dispatch(setDarkTheme());
  }, [dispatch]);

  return { theme, handleToggleLightTheme, handleToggleDarkTheme };
};

export default useTheme;
