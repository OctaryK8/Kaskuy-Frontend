import React from "react";
import AnimatedBackground from "@/components/screens/bgScreenAuth";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 overflow-hidden relative">
      <AnimatedBackground />
      <div className="w-full max-w-md relative z-10">{children}</div>
    </div>
  );
}
