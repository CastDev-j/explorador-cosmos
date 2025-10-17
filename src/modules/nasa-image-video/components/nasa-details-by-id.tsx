import { useQuery } from "@tanstack/react-query";
import actionGetByNasaId from "../actions/action-get-by-nasa-id";
import NasaDetailsData from "./details/nasa-details-data";
import NasaDetailsLoading from "./details/nasa-details-loading";
import NasaDetailsError from "./details/nasa-details-error";

interface Props {
  nasaId: string;
}

const NasaDetailsById = ({ nasaId }: Props) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["NIAVID", nasaId],
    queryFn: () =>
      actionGetByNasaId({ queryKey: ["NIAVID", nasaId] as [string, string] }),
    enabled: !!nasaId,
  });

  return (
    <>
      {isLoading && <NasaDetailsLoading />}
      {error && (
        <NasaDetailsError error={error as Error} onRetry={() => refetch()} />
      )}
      {data && !isLoading && <NasaDetailsData data={data} />}
    </>
  );
};

export default NasaDetailsById;
