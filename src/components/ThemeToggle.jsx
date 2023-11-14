import { useTheme } from "../context/themeContext";
import React from "react";
import { BsHouse, BsMoon, BsSun } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="fixed top-5 right-5 flex items-center gap-2">
            <Link
                className="bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-black/20 dark:border-white/80 border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-800"
                to={"/"}
            >
                <BsHouse className="text-gray-950 dark:text-gray-50" />
            </Link>
            <button
                className="bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-black/20 dark:border-white/80 border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-800"
                onClick={toggleTheme}
            >
                {theme === "dark" ? <BsSun className="text-gray-950 dark:text-gray-50" /> : <BsMoon className="text-gray-950 dark:text-gray-50" />}
            </button>
        </div>
    );
}