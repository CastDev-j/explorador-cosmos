import { Container } from "@/components/ui/container";
import { Highlight } from "@/components/ui/highlight";
import { Paragraph } from "@/components/ui/paragraph";
import { Title } from "@/components/ui/title";

const IndexPage = () => {
  return (
    <Container className="space-y-12">
      {/* Header */}
      <section className="space-y-4">
        <Title variant="h1" align="center">
          Explorador Cosmos
        </Title>
        <Paragraph size="lg" align="center">
          <Highlight variant="indigo">Ecos Estelares</Highlight> es una
          aplicación que consume servicios web de la NASA, brindando acceso a
          información sobre misiones espaciales y descubrimientos astronómicos.
        </Paragraph>
      </section>
    </Container>
  );
};

export default IndexPage;
