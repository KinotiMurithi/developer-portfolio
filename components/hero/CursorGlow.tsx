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
    <>
      <div
        className="pointer-events-none fixed z-[5] hidden h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/15 blur-[100px] md:block"
        style={{
          left: position.x,
          top: position.y,
        }}
      />

      <div
        className="pointer-events-none fixed z-[5] hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-300 md:block"
        style={{
          left: position.x,
          top: position.y,
        }}
      />
    </>
  );
}