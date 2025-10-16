import React, { useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useNavigate, useSearchParams } from "react-router";

interface Props {
  totalItems: number;
  itemsPerPage?: number;
  maxVisiblePages?: number;
  className?: string;
}

const Pagination: React.FC<Props> = ({
  totalItems,
  itemsPerPage = 12,
  maxVisiblePages = 3,
  className = "",
}) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const paginationRef = useRef<HTMLDivElement>(null);

  const currentPage = Number(searchParams.get("page")) || 1;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useGSAP(() => {
    if (paginationRef.current) {
      gsap.fromTo(
        paginationRef.current.children,
        { scale: 0.95, opacity: 0.5 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          stagger: 0.05,
          ease: "power2.out",
        }
      );
    }
  }, [currentPage]);

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;

    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", page.toString());

    navigate(`?${newParams.toString()}`, { replace: true });

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const halfVisible = Math.floor(maxVisiblePages / 2);

    let startPage = Math.max(1, currentPage - halfVisible);
    let endPage = Math.min(totalPages, currentPage + halfVisible);

    if (currentPage <= halfVisible) {
      endPage = Math.min(totalPages, maxVisiblePages);
    }
    if (currentPage > totalPages - halfVisible) {
      startPage = Math.max(1, totalPages - maxVisiblePages + 1);
    }

    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) pages.push("...");
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  if (totalPages <= 1) return null;

  const pageNumbers = getPageNumbers();
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      {/* Información de resultados */}
      <div className="text-sm text-stone-600 ">
        Mostrando{" "}
        <span className="font-medium text-stone-900 ">{startItem}</span> a{" "}
        <span className="font-medium text-stone-900 ">{endItem}</span> de{" "}
        <span className="font-medium text-stone-900 ">{totalItems}</span>{" "}
        resultados
      </div>

      {/* Controles de paginación */}
      <nav
        ref={paginationRef}
        className="flex items-center gap-1"
        aria-label="Paginación"
      >
        {/* Página anterior */}
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-lg border border-stone-300  bg-white  text-stone-700  hover:bg-stone-50 -700 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white -stone-800 transition-colors duration-200"
          aria-label="Página anterior"
        >
          <FaAngleLeft className="w-4 h-4" />
        </button>

        {/* Números de página */}
        {pageNumbers.map((page, index) => {
          if (page === "...") {
            return (
              <span
                key={`ellipsis-${index}`}
                className="px-3 py-2 text-stone-400 "
              >
                ...
              </span>
            );
          }

          const pageNum = page as number;
          const isActive = pageNum === currentPage;

          return (
            <button
              key={pageNum}
              onClick={() => goToPage(pageNum)}
              className={`
                min-w-[40px] px-3 py-2 rounded-lg border font-medium transition-all duration-200
                ${
                  isActive
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-md scale-105"
                    : "bg-white  text-stone-700  border-stone-300  hover:bg-stone-50 -700 hover:border-indigo-400"
                }
              `}
              aria-label={`Página ${pageNum}`}
              aria-current={isActive ? "page" : undefined}
            >
              {pageNum}
            </button>
          );
        })}

        {/* Página siguiente */}
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-lg border border-stone-300  bg-white  text-stone-700  hover:bg-stone-50 -700 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white -stone-800 transition-colors duration-200"
          aria-label="Página siguiente"
        >
          <FaAngleRight className="w-4 h-4" />
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
