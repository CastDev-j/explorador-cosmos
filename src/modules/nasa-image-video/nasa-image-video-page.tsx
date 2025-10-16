import { Container } from "@/components/ui/container";
import { Paragraph } from "@/components/ui/paragraph";
import { Title } from "@/components/ui/title";
import { Highlight } from "@/components/ui/highlight";
import SearchImageAndVideo from "./components/search";

const NasaImageVideoPage = () => {
  return (
    <Container className="space-y-8">
      <section className="space-y-4">
        <Title variant="h1" align="center">
          NASA Image and Video Library
        </Title>
        <Paragraph size="lg" align="center">
          Explora la{" "}
          <Highlight variant="indigo">
            biblioteca multimedia de la NASA
          </Highlight>{" "}
          con miles de imágenes, videos y archivos de audio sobre misiones
          espaciales, descubrimientos y exploración del universo.
        </Paragraph>
      </section>

      <section className="space-y-4">
        <SearchImageAndVideo />
      </section>
    </Container>
  );
};

export default NasaImageVideoPage;
