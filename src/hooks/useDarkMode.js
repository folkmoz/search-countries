import { useEffect, useRef, useState } from "react";

export default function useDarkMode() {
    const [isDarkMode, setDarkMode] = useState(false);

    const skipMount = useRef(true);

    const toggleDarkMode = () => {
        setDarkMode(!isDarkMode);
        setMode(isDarkMode ? "dark" : "");
    };

    const setMode = (mode) => {
        if (mode === "dark") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    useEffect(() => {
        if (skipMount.current) skipMount.current = false;
        else {
            if (isDarkMode) {
                setMode("dark");
            } else {
                setMode("light");
            }
        }
    }, [isDarkMode]);

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme !== "light" || !theme) {
            toggleDarkMode();
        } else {
            setMode();
        }
    }, []);

    return {
        isDarkMode,
        toggleDarkMode,
    };
}
