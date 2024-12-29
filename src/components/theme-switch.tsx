import { useTheme } from "@/hooks/use-theme";

const ToggleTheme = () => {
    const { theme, isLight, toggleTheme } = useTheme();

    return (
        <div onClick={toggleTheme} className="cursor-pointer">
            {isLight ? "🌙" : "☀️"}
        </div>
    );
};

export default ToggleTheme;