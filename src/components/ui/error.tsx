import React, { useRef, useState } from "react";
import { Title } from "@/components/ui/title";
import { Paragraph } from "@/components/ui/paragraph";
import { Highlight } from "@/components/ui/highlight";
import { MdErrorOutline } from "react-icons/md";
import { TbReload } from "react-icons/tb";
import { useGSAP } from "@gsap/react";
import { FaAngleDown } from "react-icons/fa";
import gsap from "gsap";

interface Props {
  error: Error;
  title?: string;
  onRetry?: () => void;
}

const QueryError: React.FC<Props> = ({ error, title, onRetry }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    if (!contentRef.current) return;

    if (isOpen) {
      gsap.fromTo(
        contentRef.current,
        {
          height: 0,
          opacity: 0,
          marginTop: 0,
        },
        {
          height: "auto",
          opacity: 1,
          marginTop: 12,
          duration: 0.4,
          ease: "power2.out",
        }
      );

      gsap.to(iconRef.current, {
        rotate: -180,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        marginTop: 0,
        duration: 0.3,
        ease: "power2.in",
      });

      gsap.to(iconRef.current, {
        rotate: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [isOpen]);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const getErrorMessage = () => {
    if (error.message.includes("fetch") || error.message.includes("network")) {
      return "No se pudo conectar con el servidor. Verifica tu conexión a internet.";
    }
    if (error.message.includes("timeout")) {
      return "La solicitud tardó demasiado tiempo. Intenta nuevamente.";
    }
    if (error.message.includes("404")) {
      return "No se encontró el recurso solicitado.";
    }
    if (error.message.includes("500")) {
      return "El servidor encontró un error. Intenta más tarde.";
    }
    return error.message || "Ocurrió un error inesperado.";
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-[32rem] text-center gap-4">
      <div className="flex justify-center">
        <div className="w-18 h-18 rounded-full flex items-center justify-center">
          <MdErrorOutline className="size-24 text-red-600" />
        </div>
      </div>

      <Title variant="h3">{title || "Error al cargar los resultados"}</Title>

      <Paragraph size="base" className="text-stone-600">
        {getErrorMessage()}
      </Paragraph>

      <div className="text-left bg-stone-100 rounded-lg p-4 w-full max-w-2xl">
        <summary
          onClick={handleToggle}
          className="cursor-pointer text-sm font-medium text-stone-700 hover:text-stone-900 list-none flex gap-2 items-center"
        >
          <div ref={iconRef}>
            <FaAngleDown />
          </div>
          Detalles técnicos
        </summary>
        <div
          ref={contentRef}
          className="overflow-hidden"
          style={{ height: 0, opacity: 0 }}
        >
          <div className="space-y-2">
            <Paragraph size="sm" className="font-mono text-red-600 break-all">
              <Highlight variant="red">{error.name}</Highlight>: {error.message}
            </Paragraph>
            {error.stack && (
              <pre className="text-xs text-stone-600 overflow-x-auto max-h-32 overflow-y-auto">
                {error.stack}
              </pre>
            )}
          </div>
        </div>
      </div>

      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          <TbReload className="w-5 h-5" />
          Intentar nuevamente
        </button>
      )}
    </div>
  );
};

export default QueryError;
