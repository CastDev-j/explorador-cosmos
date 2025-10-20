import { Container } from "@/components/ui/container";
import { Paragraph } from "@/components/ui/paragraph";
import { Title } from "@/components/ui/title";
import { Highlight } from "@/components/ui/highlight";
import { useEffect, useState } from "react";
import { db } from "@/lib/turso";
import { favoritesTable } from "@/db/schema";
import type { Favorite, ReferenceData } from "@/interfaces/favorite";
import FavoriteButton from "@/components/favorite-button";

const ApodPage = () => {
  const [test, setTest] = useState<Favorite[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const test = await db.select().from(favoritesTable);
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
            {index + 1}.- {item.id} - {JSON.stringify(item.referenceData)}
            <FavoriteButton
              type={item.type}
              referenceData={item.referenceData as ReferenceData}
              userId={item.userId}
              initialIsFavorite={item.isFavorite}
              onFavoriteChange={(isFavorite) => {
                console.log("Favorite status changed:", isFavorite);
              }}
            />
          </li>
        ))}
      </ol>
    </Container>
  );
};

export default ApodPage;
