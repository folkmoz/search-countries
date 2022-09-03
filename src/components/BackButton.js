import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import Router from "next/router";

export default function BackButton() {
    return (
        <>
            <div className={"inline-block"}>
                <a onClick={() => Router.back()}>
                    <div
                        className={
                            "dark:bg-dark-blue md:cursor-pointer cursor-default px-6 py-2 shadow-button rounded-lg w-[150px] bg-white"
                        }
                    >
                        <div
                            className={
                                "dark:text-white flex justify-center items-center gap-2 font-semibold text-dark-blue-text"
                            }
                        >
                            <span>
                                <FontAwesomeIcon icon={faArrowLeftLong} />
                            </span>
                            <span>Back</span>
                        </div>
                    </div>
                </a>
            </div>
        </>
    );
}
