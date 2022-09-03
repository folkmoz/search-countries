import Skeleton from "react-loading-skeleton";

export default function SkeletonCard() {
    return (
        <>
            <div
                className={
                    "w-[300px] h-[357px] dark:bg-dark-blue mb-8 shadow-tools bg-white rounded-xl overflow-hidden"
                }
            >
                <div className={"-mt-1"}>
                    <Skeleton width={300} height={165} />
                </div>
                <div className={"px-4 py-6"}>
                    <Skeleton width={100} />
                    <div className={"mt-4"}>
                        <Skeleton width={200} count={3} />
                    </div>
                </div>
            </div>
        </>
    );
}
