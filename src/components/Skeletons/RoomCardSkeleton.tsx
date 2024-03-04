import { Skeleton } from "@/components/UI/skeleton";

const RoomCardSkeleton = () => {
  return (
    <div className="flex w-[350px] mx-auto md:w-[650px] md:justify-between xl:w-full flex-col  md:flex-row md:flex-wrap items-center justify-start gap-4 p-3 bg-white rounded-2xl shadow-lg">
      <Skeleton className="w-[300px] h-[200px] rounded-xl" />
      <div className="h-full flex flex-col justify-start items-start space-y-4">
        <Skeleton className="h-4 w-[300px]" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-8 w-[200px]" />
      </div>
      <div className="h-full space-y-2">
        <Skeleton className="h-8 w-[230px]" />
        <Skeleton className="h-8 w-[230px]" />
        <Skeleton className="h-8 w-[230px]" />
        <Skeleton className="h-8 w-[230px]" />
      </div>
      <div className="h-full flex flex-col items-end justify-start space-y-4">
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[120px]" />
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-4 w-[300px]" />
      </div>
    </div>
  );
};

export default RoomCardSkeleton;
