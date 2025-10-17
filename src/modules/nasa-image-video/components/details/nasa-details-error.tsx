import QueryError from "@/components/ui/error";

interface Props {
  error: unknown;
  onRetry?: () => void;
}

const NasaDetailsError = ({ error, onRetry }: Props) => {
  return (
    <QueryError
      error={error as Error}
      onRetry={onRetry}
      title="Error al buscar los detalles"
    />
  );
};

export default NasaDetailsError;
