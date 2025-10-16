import React, { useState } from "react";
import { ImEarth } from "react-icons/im";
import { routes, SITE_NAME } from "../../config";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { NavLink } from "react-router";
import { cn } from "@/lib/cn";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  useAuth,
  UserButton,
} from "@clerk/clerk-react";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const mobileMenuRef = React.useRef<HTMLDivElement | null>(null);
  const { isSignedIn } = useAuth();

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
    <header className="bg-stone-950 text-white border-b border-stone-700 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <NavLink
              to="/"
              className="p-2 rounded-md flex items-center gap-2 hover:bg-stone-800 transition-colors"
            >
              <ImEarth className="text-indigo-500 w-6 h-6" />
              <span className="font-semibold text-white">{SITE_NAME}</span>
            </NavLink>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6">
              {routes.map((r) => (
                <NavLink
                  key={r.path}
                  to={r.path}
                  className={({ isActive }: { isActive: boolean }) =>
                    cn(
                      "text-sm font-medium transition-colors",
                      "text-stone-400 hover:text-stone-200",
                      isActive && "text-white"
                    )
                  }
                >
                  {r.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center">
              <SignedOut>
                <SignInButton mode="modal">
                  <button
                    className={cn(
                      "px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
                      "bg-indigo-700 text-stone-200 hover:bg-indigo-600",
                      "border border-indigo-600"
                    )}
                  >
                    Iniciar Sesión
                  </button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <div className="flex items-center gap-2">
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: "w-7 h-7",
                        userButtonTrigger:
                          "focus:shadow-none hover:bg-stone-700",
                      },
                    }}
                    fallback={
                      <div className="w-7 h-7 bg-stone-700 rounded-full" />
                    }
                  />
                </div>
              </SignedIn>
            </div>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              aria-label="Open menu"
              onClick={handleMenuClick}
              className="p-2 rounded-md text-stone-300 hover:text-white hover:bg-stone-800 transition-colors"
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
        className="md:hidden overflow-hidden bg-stone-950 border-t border-stone-700 absolute top-16 left-0 right-0 shadow-lg"
        ref={mobileMenuRef}
        style={{ display: open ? "block" : "none" }}
      >
        <div className="px-2 pt-2 pb-4 space-y-1">
          {isSignedIn && (
            <div className="py-2 flex items-center justify-end px-3">
              <SignedIn>
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "w-7 h-7",
                      userButtonTrigger: "focus:shadow-none hover:bg-stone-700",
                    },
                  }}
                  fallback={
                    <div className="w-7 h-7 bg-stone-800 rounded-full" />
                  }
                />
              </SignedIn>
            </div>
          )}
          {routes.map((r) => (
            <NavLink
              key={r.path}
              to={r.path}
              onClick={handleLinkClick}
              className={({ isActive }: { isActive: boolean }) =>
                cn(
                  "block px-3 py-3 rounded-md text-base font-medium transition-colors",
                  "text-stone-300 hover:text-white hover:bg-stone-900",
                  isActive && "text-white bg-stone-900"
                )
              }
            >
              {r.label}
            </NavLink>
          ))}

          <div className="px-3 py-2">
            <SignedOut>
              <SignInButton mode="modal">
                <button
                  className={cn(
                    "w-full px-4 py-2 rounded-md text-sm font-medium transition-colors",
                    "bg-stone-900 text-stone-200 hover:bg-stone-800",
                    "border border-stone-800"
                  )}
                >
                  Iniciar Sesión
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
