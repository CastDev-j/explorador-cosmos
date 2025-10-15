import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { cn } from "@/lib/cn";

const Auth = () => {
  return (
    <div className="flex items-center">
      <SignedOut>
        <SignInButton mode="modal">
          <button
            className={cn(
              "px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
              "bg-stone-800 text-stone-200 hover:bg-stone-700",
              "border border-stone-600"
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
                userButtonTrigger: "focus:shadow-none hover:bg-stone-700",
              },
            }}
            fallback={<div className="w-7 h-7 bg-stone-700 rounded-full" />}
          />
        </div>
      </SignedIn>
    </div>
  );
};

export default Auth;
