import { Title } from "@/components/ui/title";
import { Subtitle } from "@/components/ui/subtitle";
import { Paragraph } from "@/components/ui/paragraph";
import { Label } from "@/components/ui/label";
import { Quote } from "@/components/ui/quote";
import { Highlight } from "@/components/ui/highlight";
import { List, ListItem } from "@/components/ui/list";
import { Caption } from "@/components/ui/caption";
import { Input } from "@/components/ui/input";
import { Container } from "@/components/ui/container";

const ComponentsPage = () => {
  return (
    <Container className="space-y-12">
      {/* Header */}
      <section className="space-y-4">
        <Title variant="h1" align="center">
          Explorador Cosmos
        </Title>
        <Paragraph size="lg" align="center">
          Sistema de componentes de tipografía para una experiencia visual
          excepcional
        </Paragraph>
      </section>

      {/* Titles */}
      <section className="space-y-4">
        <Title variant="h2">Títulos Principales</Title>
        <div className="space-y-3 pl-4">
          <Title variant="h1">Título H1 - Grande y Destacado</Title>
          <Title variant="h2">Título H2 - Medio y Llamativo</Title>
          <Title variant="h3">Título H3 - Compacto y Elegante</Title>
        </div>
      </section>

      {/* Subtitles */}
      <section className="space-y-4">
        <Title variant="h2">Subtítulos Secundarios</Title>
        <div className="space-y-3 pl-4">
          <Subtitle variant="h4">Subtítulo H4 - Sección Principal</Subtitle>
          <Subtitle variant="h5">Subtítulo H5 - Subsección</Subtitle>
          <Subtitle variant="h6">Subtítulo H6 - Detalles Menores</Subtitle>
        </div>
      </section>

      {/* Paragraphs */}
      <section className="space-y-4">
        <Title variant="h2">Párrafos y Texto</Title>
        <div className="space-y-3 pl-4">
          <Paragraph size="lg">
            Este es un párrafo grande ideal para introducciones importantes. El
            cosmos es vasto e infinito, lleno de misterios por descubrir.
          </Paragraph>
          <Paragraph size="base">
            Este es un párrafo normal perfecto para contenido regular. La
            exploración espacial nos permite comprender mejor nuestro lugar en
            el universo.
          </Paragraph>
          <Paragraph size="sm">
            Este es un párrafo pequeño útil para detalles adicionales o notas al
            pie.
          </Paragraph>
        </div>
      </section>

      {/* Labels */}
      <section className="space-y-4">
        <Title variant="h2">Formularios</Title>
        <div className="space-y-4 pl-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre de usuario</Label>
            <Input id="name" type="text" placeholder="Ingresa tu nombre" />
            <Paragraph size="sm" className="text-stone-950/70">
              Campo de texto simple
            </Paragraph>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" required>
              Correo electrónico
            </Label>
            <Input id="email" type="email" placeholder="correo@ejemplo.com" />
            <Paragraph size="sm" className="text-stone-950/70">
              Campo requerido con validación de email
            </Paragraph>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="search">Búsqueda</Label>
            <Input
              id="search"
              type="search"
              placeholder="Buscar en el cosmos..."
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="error-example">Campo con error</Label>
            <Input
              id="error-example"
              type="text"
              placeholder="Este campo tiene un error"
              error
            />
            <Paragraph size="sm" className="text-red-600">
              Este campo contiene errores
            </Paragraph>
          </div>
          <div className="space-y-2">
            <Label htmlFor="disabled">Campo deshabilitado</Label>
            <Input
              id="disabled"
              type="text"
              placeholder="Campo deshabilitado"
              disabled
            />
          </div>
        </div>
      </section>

      {/* Quotes */}
      <section className="space-y-4">
        <Title variant="h2">Citas Destacadas</Title>
        <div className="space-y-3 pl-4">
          <Quote author="Carl Sagan">
            El cosmos está dentro de nosotros. Estamos hechos de materia
            estelar. Somos una forma de que el universo se conozca a sí mismo.
          </Quote>
          <Quote author="Neil deGrasse Tyson" cite="https://example.com">
            El universo no está obligado a tener sentido para ti.
          </Quote>
        </div>
      </section>

      {/* Highlights */}
      <section className="space-y-4">
        <Title variant="h2">Texto Resaltado</Title>
        <Paragraph>
          Puedes usar diferentes variantes de resaltado:{" "}
          <Highlight variant="indigo">índigo importante</Highlight>,{" "}
          <Highlight variant="yellow">amarillo para atención</Highlight>,{" "}
          <Highlight variant="green">verde para éxito</Highlight>, y{" "}
          <Highlight variant="red">rojo para alertas</Highlight>.
        </Paragraph>
      </section>

      {/* Lists */}
      <section className="space-y-4">
        <Title variant="h2">Listas Personalizadas</Title>
        <div className="space-y-4 pl-4">
          <div>
            <Subtitle variant="h5">Lista con viñetas (índigo)</Subtitle>
            <List variant="indigo">
              <ListItem>Diseño responsive y adaptable</ListItem>
              <ListItem>Soporte para modo oscuro incluido</ListItem>
              <ListItem>Tipado completo con TypeScript</ListItem>
              <ListItem>Fácil personalización con props</ListItem>
            </List>
          </div>
          <div>
            <Subtitle variant="h5">Lista ordenada (índigo)</Subtitle>
            <List ordered variant="indigo">
              <ListItem>Importa los componentes necesarios</ListItem>
              <ListItem>Define tus props personalizadas</ListItem>
              <ListItem>Añade el contenido como children</ListItem>
              <ListItem>Disfruta del resultado final</ListItem>
            </List>
          </div>
          <div>
            <Subtitle variant="h5">Lista sin marcadores</Subtitle>
            <List variant="none">
              <ListItem>- Exploración espacial</ListItem>
              <ListItem>- Galaxias y nebulosas</ListItem>
              <ListItem>- Agujeros negros</ListItem>
              <ListItem>- Materia oscura</ListItem>
            </List>
          </div>
        </div>
      </section>

      {/* Caption */}
      <section className="space-y-4">
        <Title variant="h2">Pies de Imagen</Title>
        <div className="space-y-3 pl-4">
          <div className="bg-indigo-100 text-indigo-500 h-48 rounded-sm flex items-center justify-center text-2xl">
            Imagen del Cosmos
          </div>
          <Caption align="center">
            Imagen representativa del universo infinito y sus maravillas
          </Caption>
        </div>
      </section>
    </Container>
  );
};

export default ComponentsPage;
