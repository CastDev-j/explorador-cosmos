import { Container } from "@/components/ui/container";
import Skeleton from "@/components/ui/skeleton";

const NasaDetailsLoading = () => {
  return (
    <Container className="space-y-4">
      <div className="animate-pulse">
        <Skeleton className="h-6 rounded w-1/3" />
        <Skeleton className="h-4 rounded w-full mt-2" />
        <Skeleton className="h-48 rounded mt-4" />
      </div>
    </Container>
  );
};

export default NasaDetailsLoading;
