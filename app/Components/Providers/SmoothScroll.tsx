"use client";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const scroll = new LocomotiveScroll();

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return <>{children}</>;
}
