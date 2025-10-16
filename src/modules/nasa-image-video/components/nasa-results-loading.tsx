import React from "react";
import { Container } from "@/components/ui/container";
import Skeleton from "@/components/ui/skeleton";

interface Props {
  itemCount?: number;
}

const NASAResultsLoading: React.FC<Props> = ({ itemCount = 9 }) => {
  return (
    <Container className="space-y-8">
      <section className="space-y-4 text-center">
        <Skeleton className="w-72 h-9 rounded-sm" rounded={false} />
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: itemCount }).map((_, index) => (
          <article key={index} className="bg-white rounded-lg overflow-hidden">
            <Skeleton width="100%" height={192} rounded={false} />

            <div className="p-4 space-y-3">
              <Skeleton width="100%" height={28} />
              <Skeleton width="80%" height={28} />

              <div className="flex items-center gap-2">
                <Skeleton width={60} height={16} />
                <Skeleton width={4} height={4} circle />
                <Skeleton width={120} height={16} />
              </div>

              <div className="space-y-2">
                <Skeleton width="100%" height={14} />
                <Skeleton width="100%" height={14} />
                <Skeleton width="85%" height={14} />
              </div>

              <div className="flex flex-wrap gap-1">
                <Skeleton width={70} height={24} />
                <Skeleton width={85} height={24} />
                <Skeleton width={60} height={24} />
              </div>

              <Skeleton width={140} height={12} />
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
};

export default NASAResultsLoading;
