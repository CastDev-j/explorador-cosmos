import { useRef } from "react";
import { Title } from "@/components/ui/title";
import { Paragraph } from "@/components/ui/paragraph";
import { ImEarth } from "react-icons/im";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const NASADefaultComponent = () => {
  const earthRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      earthRef.current,
      {
        scale: 0,
        rotation: -180,
        opacity: 0,
      },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
      }
    );

    tl.fromTo(
      titleRef.current,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.3"
    );

    gsap.to(earthRef.current, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "none",
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-[32rem] text-center gap-6">
      <div ref={earthRef} className="flex justify-center">
        <div className="w-24 h-24 rounded-full flex items-center justify-center">
          <ImEarth className="size-16 text-indigo-600" />
        </div>
      </div>

      {/* Título y descripción */}
      <div ref={titleRef} className="space-y-3">
        <Title variant="h2" align="center">
          Explora el Universo
        </Title>
        <Paragraph
          size="lg"
          align="center"
          className="max-w-3xl text-stone-600"
        >
          Ingresa un término de búsqueda para explorar la biblioteca multimedia
          de la NASA .
        </Paragraph>
      </div>

      <div className="mt-2">
        <Paragraph size="sm" className="text-stone-500 dark:text-stone-400">
          Sugerencias: <span className="font-medium">Apollo 11</span>,{" "}
          <span className="font-medium">Hubble</span>,{" "}
          <span className="font-medium">Mars</span>,{" "}
          <span className="font-medium">Moon</span>,{" "}
        </Paragraph>
      </div>
    </div>
  );
};

export default NASADefaultComponent;
