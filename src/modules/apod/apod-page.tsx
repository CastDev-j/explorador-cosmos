import { Container } from "@/components/ui/container";
import { Paragraph } from "@/components/ui/paragraph";
import { Title } from "@/components/ui/title";
import { Highlight } from "@/components/ui/highlight";
import { useEffect, useState } from "react";
import { db } from "@/lib/turso";
import { fooTable } from "@/db/schema";

const ApodPage = () => {
  const [test, setTest] = useState<{ bar: string }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const test = await db.select().from(fooTable);
      setTest(test);
    };

    fetchData();
  }, []);

  return (
    <Container className="space-y-8">
      <section className="space-y-4">
        <Title variant="h1" align="center">
          Astronomy Picture of the Day
        </Title>
        <Paragraph size="lg" align="center">
          Descubre la{" "}
          <Highlight variant="indigo">imagen astronómica del día</Highlight>{" "}
          seleccionada por la NASA. Cada día presenta una fotografía diferente
          del universo, acompañada de una explicación escrita por astrónomos
          profesionales.
        </Paragraph>
      </section>
      <ol className="space-y-4">
        {test.map((item, index) => (
          <li key={index}>
            {index + 1}.- {item.bar}
          </li>
        ))}
      </ol>
    </Container>
  );
};

export default ApodPage;
