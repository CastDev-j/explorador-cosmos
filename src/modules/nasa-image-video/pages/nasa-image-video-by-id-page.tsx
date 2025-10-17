import { Container } from "@/components/ui/container";
import { useParams } from "react-router";
import NasaDetailsById from "../components/nasa-details-by-id";

const NasaImageVideoByIdPage = () => {
  const { nasaId } = useParams();

  return (
    <Container className="space-y-8">
      <NasaDetailsById nasaId={nasaId!} />
    </Container>
  );
};

export default NasaImageVideoByIdPage;
