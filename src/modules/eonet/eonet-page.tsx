import { Container } from "@/components/ui/container";
import { Paragraph } from "@/components/ui/paragraph";
import { Title } from "@/components/ui/title";
import { Highlight } from "@/components/ui/highlight";

const EonetPage = () => {
  return (
    <Container className="space-y-8">
      <section className="space-y-4">
        <Title variant="h1" align="center">
          Earth Observatory Natural Event Tracker
        </Title>
        <Paragraph size="lg" align="center">
          Monitorea{" "}
          <Highlight variant="indigo">
            eventos naturales en tiempo real
          </Highlight>{" "}
          alrededor del mundo con datos del Observatorio Terrestre de la NASA.
        </Paragraph>
      </section>
    </Container>
  );
};

export default EonetPage;
