import React, { useState } from "react";
import { ImEarth } from "react-icons/im";
import { routes, SITE_NAME } from "../../config";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { NavLink } from "react-router";
import { cn } from "@/lib/cn";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const mobileMenuRef = React.useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!mobileMenuRef.current) return;

    if (open) {
      gsap.fromTo(
        mobileMenuRef.current,
        {
          height: 0,
          opacity: 0,
        },
        {
          height: "auto",
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        mobileMenuRef.current.querySelectorAll("a"),
        {
          y: -10,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.2,
          stagger: 0.1,
          delay: 0.1,
          ease: "power2.out",
        }
      );
    }
  }, [open]);

  const handleMenuClick = () => {
    setOpen((v) => !v);
  };

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <header className="bg-stone-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-md flex items-center gap-2">
              <ImEarth className="text-indigo-500 w-6 h-6" />
              <span className="font-semibold">{SITE_NAME}</span>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center gap-6">
              {routes.map((r) => (
                <NavLink
                  key={r.path}
                  to={r.path}
                  className={({ isActive }: { isActive: boolean }) =>
                    cn(
                      "text-sm text-stone-400 hover:text-stone-200",
                      isActive && "text-stone-200"
                    )
                  }
                >
                  {r.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              aria-label="Open menu"
              onClick={handleMenuClick}
              className="p-2 rounded-md text-stone-300 hover:text-stone-200 transition-colors"
            >
              {open ? (
                <HiOutlineX className="w-6 h-6" />
              ) : (
                <HiOutlineMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className="md:hidden overflow-hidden"
        ref={mobileMenuRef}
        style={{ display: open ? "block" : "none" }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {routes.map((r) => (
            <NavLink
              key={r.path}
              to={r.path}
              onClick={handleLinkClick}
              className={({ isActive }: { isActive: boolean }) =>
                cn(
                  "block px-3 py-2 rounded-md text-base font-medium text-stone-300 hover:text-stone-200 hover:bg-stone-800 transition-colors",
                  isActive && "text-stone-200 bg-stone-800"
                )
              }
            >
              {r.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
