import React, { ReactNode } from "react";
import { Background } from "@repo/ui/background";
export const runtime = "edge";

function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Background />
      <div className="relative z-10 flex h-screen w-screen justify-center">
        {children}
      </div>
    </>
  );
}

export default AuthLayout;
