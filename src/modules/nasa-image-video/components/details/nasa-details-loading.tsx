import Skeleton from "@/components/ui/skeleton";

const NasaDetailsLoading = () => {
  return (
    <div className="min-h-screen">
      <div className="border-b border-stone-200">
        <div className="container mx-auto px-4 py-4">
          <Skeleton className="h-10 w-32 rounded-lg" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <article className="max-w-5xl mx-auto animate-pulse">
          <Skeleton className="w-full aspect-video md:aspect-[21/9] rounded-sm mb-8" />

          <div className="space-y-3 mb-6">
            <Skeleton className="h-10 w-3/4 rounded-lg" />
            <Skeleton className="h-10 w-1/2 rounded-lg" />
          </div>

          <div className="flex flex-wrap gap-4 md:gap-6 mb-8">
            <Skeleton className="h-6 w-32 rounded-full" />
            <Skeleton className="h-6 w-40 rounded-full" />
            <Skeleton className="h-6 w-24 rounded-full" />
          </div>

          <div className="space-y-3 mb-8">
            <Skeleton className="h-5 w-full rounded" />
            <Skeleton className="h-5 w-full rounded" />
            <Skeleton className="h-5 w-full rounded" />
            <Skeleton className="h-5 w-4/5 rounded" />
            <Skeleton className="h-5 w-full rounded" />
            <Skeleton className="h-5 w-3/4 rounded" />
          </div>

          <div className="mb-8">
            <Skeleton className="h-4 w-24 rounded mb-3" />
            <div className="flex flex-wrap gap-2">
              <Skeleton className="h-8 w-24 rounded-full" />
              <Skeleton className="h-8 w-32 rounded-full" />
              <Skeleton className="h-8 w-28 rounded-full" />
              <Skeleton className="h-8 w-36 rounded-full" />
              <Skeleton className="h-8 w-20 rounded-full" />
            </div>
          </div>

          <div className="pt-6 border-t border-stone-200 ">
            <Skeleton className="h-6 w-64 rounded" />
          </div>
        </article>
      </div>
    </div>
  );
};

export default NasaDetailsLoading;
