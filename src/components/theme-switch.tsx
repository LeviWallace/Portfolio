import { useTheme } from "@/hooks/use-theme";

const ToggleTheme = () => {
    const { isLight, toggleTheme } = useTheme();

    return (
        <div onClick={toggleTheme} className="cursor-pointer">
            {isLight ? "🌙" : "☀️"}
        </div>
    );
};

export default ToggleTheme;