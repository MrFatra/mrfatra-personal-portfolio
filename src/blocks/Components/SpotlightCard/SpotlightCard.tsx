/*
  jsrepo 1.24.1
  Installed from github/davidhdev/react-bits
  1-11-2025
*/

import React, { useRef } from "react";
import "./SpotlightCard.scss";
import { useColorMode } from "@/components/ui/color-mode";

type SpotlightCardProps = {
  children?: React.ReactNode
  className?: string
}

const SpotlightCard = ({ children, className = "" }: SpotlightCardProps) => {
  const divRef = useRef<any>(null);
  const { colorMode } = useColorMode()

  const spotlightColor = colorMode === 'dark' ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.3)"

  const handleMouseMove = (e: any) => {
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    divRef.current.style.setProperty("--mouse-x", `${x}px`);
    divRef.current.style.setProperty("--mouse-y", `${y}px`);
    divRef.current.style.setProperty("--spotlight-color", spotlightColor);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`card-spotlight ${className}`}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;
