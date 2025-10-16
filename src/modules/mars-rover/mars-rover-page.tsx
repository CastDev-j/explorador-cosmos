import { Container } from "@/components/ui/container";
import { Paragraph } from "@/components/ui/paragraph";
import { Title } from "@/components/ui/title";
import { Highlight } from "@/components/ui/highlight";

const MarsRoverPage = () => {
  return (
    <Container className="space-y-8">
      <section className="space-y-4">
        <Title variant="h1" align="center">
          Mars Rover Photos
        </Title>
        <Paragraph size="lg" align="center">
          Accede a las{" "}
          <Highlight variant="indigo">fotografías reales de Marte</Highlight>{" "}
          capturadas por los rovers de la NASA: Curiosity, Opportunity, Spirit y
          Perseverance.
        </Paragraph>
      </section>
    </Container>
  );
};

export default MarsRoverPage;
