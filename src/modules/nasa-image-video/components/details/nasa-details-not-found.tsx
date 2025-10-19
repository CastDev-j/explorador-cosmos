import { useRef } from "react";
import { Title } from "@/components/ui/title";
import { Paragraph } from "@/components/ui/paragraph";
import { Button } from "@/components/ui/button";
import { FaSearch } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useNavigate } from "react-router";

const NASADetailsNotFound = () => {
  const searchRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/nasa");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center sm:min-h-[38rem] min-h-[42rem] text-center gap-6">
      <div ref={searchRef} className="flex justify-center">
        <div className="w-24 h-24 rounded-full   flex items-center justify-center">
          <FaSearch className="size-12 text-indigo-500 " />
        </div>
      </div>

      <div ref={titleRef} className="space-y-3">
        <Title variant="h2" align="center">
          No se encontraron resultados
        </Title>
        <Paragraph
          size="lg"
          align="center"
          className="max-w-2xl text-stone-600 "
        >
          No pudimos encontrar ningún resultado para tu búsqueda. Intenta con
          otros términos o explora las sugerencias.
        </Paragraph>
      </div>

      <div ref={buttonRef} className="flex flex-col sm:flex-row gap-3 mt-2">
        <Button onClick={handleGoBack} variant="ghost" className="gap-2">
          <IoArrowBack className="size-4" />
          Volver atrás
        </Button>
        <Button onClick={() => navigate("/nasa")} className="gap-2">
          <FaSearch className="size-4" />
          Nueva búsqueda
        </Button>
      </div>
    </div>
  );
};

export default NASADetailsNotFound;
