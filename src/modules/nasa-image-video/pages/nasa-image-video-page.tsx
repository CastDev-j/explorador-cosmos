import { Container } from "@/components/ui/container";
import SearchImageAndVideo from "../components/search";

const NasaImageVideoPage = () => {
  return (
    <Container className="space-y-8">
      <section className="space-y-4">
        <SearchImageAndVideo />
      </section>
    </Container>
  );
};

export default NasaImageVideoPage;
