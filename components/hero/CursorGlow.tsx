"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({
    x: -500,
    y: -500,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-[5] hidden h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[110px] md:block"
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  );
}