import { Container } from "@/components/ui/container";
import { Title } from "@/components/ui/title";
import SearchImageAndVideo from "../components/search";

const NasaImageVideoPage = () => {
  return (
    <Container className="space-y-8">
      <section className="space-y-4">
        <Title variant="h1" align="center">
          NASA Image and Video Library
        </Title>
      </section>

      <section className="space-y-4">
        <SearchImageAndVideo />
      </section>
    </Container>
  );
};

export default NasaImageVideoPage;
