import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as MoonRegular } from "@fortawesome/free-regular-svg-icons";
import { faMoon as MoonSolid } from "@fortawesome/free-solid-svg-icons";
import useDarkMode from "@hooks/useDarkMode";

export default function Header() {
    const { toggleDarkMode, isDarkMode } = useDarkMode();
    return (
        <>
            <header>
                <div
                    className={
                        "md:px-16 lg:24 md:h-[70px] dark:bg-dark-blue dark:text-white text-dark-blue-text px-4 h-[100px] flex justify-between items-center bg-white shadow-sm"
                    }
                >
                    <div>
                        <Link href={"/"}>
                            <a>
                                <h1 className={"md:text-2xl text-xl font-bold"}>
                                    Where in the world?
                                </h1>
                            </a>
                        </Link>
                    </div>
                    <div>
                        <div
                            onClick={toggleDarkMode}
                            className={
                                "md:hover:cursor-pointer cursor-default inline-flex items-center"
                            }
                        >
                            <span className={"md:text-lg text-2xl"}>
                                <FontAwesomeIcon
                                    icon={isDarkMode ? MoonSolid : MoonRegular}
                                    className={"mr-1"}
                                />
                            </span>
                            <span
                                className={
                                    "sm:block md:text-lg hidden font-semibold"
                                }
                            >
                                <text>Dark Mode</text>
                            </span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
