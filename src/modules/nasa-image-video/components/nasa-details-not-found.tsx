import { useRef } from "react";
import { Title } from "@/components/ui/title";
import { Paragraph } from "@/components/ui/paragraph";
import { FaSearch } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useSearchParams } from "react-router";
import { Highlight } from "@/components/ui/highlight";

const NASASearchNotFound = () => {
  const searchRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const [searchParams] = useSearchParams();

  const query = searchParams.get("q") || "";
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      searchRef.current,
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

    tl.fromTo(
      buttonRef.current,
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.2"
    );
  }, []);

  return (
    <div className="flex flex-col justify-center items-center text-center">
      <div ref={searchRef} className="flex justify-center">
        <div className="w-24 h-24 rounded-full   flex items-center justify-center">
          <FaSearch className="size-12 text-indigo-500 " />
        </div>
      </div>

      <div ref={titleRef} className="space-y-3">
        <Title variant="h3" align="center">
          Sin Resultados
        </Title>
        <Paragraph
          size="lg"
          align="center"
          className="max-w-2xl text-stone-600 "
        >
          No encontramos ninguna coincidencia para{" "}
          <Highlight variant="indigo">{query}</Highlight>. Intenta con otros
          término.
        </Paragraph>
      </div>
    </div>
  );
};

export default NASASearchNotFound;
