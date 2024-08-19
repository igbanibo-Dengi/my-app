"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface IconRevealCardProps {
  revealElement: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export const IconRevealCard = ({
  revealElement,
  children,
  className,
}: IconRevealCardProps) => {
  const [widthPercentage, setWidthPercentage] = useState(65);
  const [heightPercentage, setHeightPercentage] = useState(33);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [boundingRect, setBoundingRect] = useState<DOMRect | null>(null);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    if (cardRef.current) {
      setBoundingRect(cardRef.current.getBoundingClientRect());
    }
  }, []);

  const updatePercentages = useCallback(
    (clientX: number, clientY: number) => {
      if (boundingRect) {
        const relativeX = clientX - boundingRect.left;
        const relativeY = clientY - boundingRect.top;
        setWidthPercentage((relativeX / boundingRect.width) * 100);
        setHeightPercentage((relativeY / boundingRect.height) * 40);
      }
    },
    [boundingRect]
  );

  const mouseMoveHandler = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      event.preventDefault();
      updatePercentages(event.clientX, event.clientY);
    },
    [updatePercentages]
  );

  const mouseLeaveHandler = useCallback(() => {
    setIsMouseOver(false);
    setWidthPercentage(65);
    setHeightPercentage(33);
  }, []);

  const mouseEnterHandler = useCallback(() => {
    setIsMouseOver(true);
  }, []);

  const touchMoveHandler = useCallback(
    (event: React.TouchEvent<HTMLDivElement>) => {
      event.preventDefault();
      const { clientX, clientY } = event.touches[0];
      updatePercentages(clientX, clientY);
    },
    [updatePercentages]
  );

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={mouseMoveHandler}
      onTouchStart={mouseEnterHandler}
      onTouchEnd={mouseLeaveHandler}
      onTouchMove={touchMoveHandler}
      ref={cardRef}
      className={cn(
        " w-[360px] md:w-[640px] h-[400px] rounded-lg relative overflow-hidden bg-[#1D1C20]",
        className
      )}
      aria-label="Icon Reveal Card"
    >
      {children}
      <div className="h-full relative flex flex-col overflow-hidden">
        <div className="py-5 px-10 mb-4">
          <h2 className="font-bold text-lg text-white">
            Generate SVG icons for anything.
          </h2>
          <p className="mt-2 text-gray-400 text-sm leading-relaxed">
            Magic Icon generates infinitely scalable <br /> SVG icons to use
            anywhere in your design.
          </p>
        </div>
        <motion.div
          style={{ width: "100%", height: "100%" }}
          animate={
            isMouseOver
              ? {
                  opacity: widthPercentage > 0 ? 1 : 0,
                  clipPath: `polygon(0 0, ${widthPercentage}% 0, ${widthPercentage}% 100%, 0 100%)`,
                }
              : {
                  clipPath: `polygon(0 0, ${widthPercentage}% 0, ${widthPercentage}% 100%, 0 100%)`,
                }
          }
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="relative"
        >
          {revealElement}
        </motion.div>
        <motion.div
          animate={{
            left: `calc(${widthPercentage}% - 20px)`, // Adjusted to center the separator
            top: `calc(${heightPercentage}% - 20px)`, // Adjusted to center the separator
            rotate: `5deg`,
            opacity: widthPercentage > 0 ? 1 : 0,
          }}
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="h-[600px] w-[40px] bg-gradient-to-r rounded-t-lg from-black via-gray-500 to-black absolute will-change-transform shadow-[0px_55px_57px_0px_rgba(0,_0,_0,_0.2)]"
        >
          <div className="absolute w-20 h-60 -left-10 -top-10 bg-black/90 blur-3xl z-10 "></div>
          <motion.div className="bg-gradient-to-r from-gray-300 via-white to-gray-500 h-[70px] rounded-t-lg w-[40px] z-20" />
        </motion.div>
      </div>
    </div>
  );
};
