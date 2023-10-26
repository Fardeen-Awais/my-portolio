import { useTheme } from "next-themes";

export const themeChecker = () => {
    const { theme } = useTheme();
    return theme
}