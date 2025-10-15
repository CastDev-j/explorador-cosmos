import React from "react";
import { FiGithub } from "react-icons/fi";
import { authors, githubRepo, routes, SITE_NAME } from "../../config";
import { NavLink } from "react-router";
import { cn } from "@/lib/cn";

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto bg-stone-950 border-t border-stone-800 text-stone-400">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-10">
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Proyecto */}
          <div className="col-span-2">
            <h3 className="mb-3 md:mb-4 text-base md:text-lg font-semibold text-stone-200">
              Proyecto Final Tópicos Avanzados de Programación
            </h3>
            <p className="text-pretty text-xs md:text-sm mb-3">
              <span className="text-indigo-500 font-semibold">{SITE_NAME}</span>{" "}
              es una aplicación que consume servicios web de la NASA, brindando
              acceso a información sobre misiones espaciales y descubrimientos
              astronómicos.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="mb-3 md:mb-4 text-sm font-semibold text-stone-200">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs md:text-sm">
              {routes.map((r) => (
                <li key={r.path}>
                  <NavLink
                    className={({ isActive }: { isActive: boolean }) =>
                      cn(
                        "transition-colors hover:text-stone-200",
                        isActive && "text-stone-200"
                      )
                    }
                    to={r.path}
                  >
                    {r.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Integrantes */}
          <div>
            <h4 className="mb-3 md:mb-4 text-sm font-semibold text-stone-200">
              Integrantes
            </h4>
            <ul className="space-y-2 text-xs md:text-sm">
              {authors.map((authorName) => (
                <li key={authorName}>{authorName}</li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="mb-3 md:mb-4 text-sm font-semibold text-stone-200">
              Recursos
            </h4>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>
                <a
                  href={githubRepo}
                  className="transition-colors hover:text-stone-200 flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub className="w-4 h-4" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-stone-800 text-xs text-center text-stone-500">
          © {new Date().getFullYear()} {SITE_NAME} — Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
