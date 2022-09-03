export default function DetailText({ title = "", describe = "", children }) {
    const capitalize = (str) =>
        str
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

    return (
        <>
            <div
                className={
                    children ? "sm:gap-4 flex flex-wrap gap-2 items-center" : ""
                }
            >
                <span className={"font-semibold"}>
                    {capitalize(title.split(" "))}:
                </span>
                <span className={"font-light"}>
                    {children ? children : <> {describe.toLocaleString()}</>}
                </span>
            </div>
        </>
    );
}
