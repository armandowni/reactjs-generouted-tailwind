import useCarouselHooks from "@/hooks/carouselHooks";
import React, { useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import styled from "styled-components";
import "tailwindcss/tailwind.css";

const CarouselContainer = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  width: 100%;
  /* margin-top: 500px; */
`;

const CarouselInner = styled.div`
  display: flex;
  width: 100%;
  transition: transform 0.5s ease-in-out;
`;

export const CarouselItem = styled.div`
  min-width: 100%;
  box-sizing: border-box;
`;

interface CarouselProps {
  children: React.ReactNode[];
  CarouselFooter: React.ElementType;
  isAutoPlay?: boolean;
  pageSize?: number;
  intervalPage?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  CarouselFooter,
  isAutoPlay,
  pageSize,
  intervalPage = 3000
}) => {
  const { currentIndex, handlePrev, handleNext } = useCarouselHooks();
  const pageSizeValue = !pageSize || pageSize <= 1 ? 1 : pageSize;
  const pageSizeValueAuto = Math.ceil(children.length / pageSizeValue);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNext(pageSizeValueAuto),
    onSwipedRight: () => handlePrev(pageSizeValueAuto),
    trackTouch: true,
    preventScrollOnSwipe: false,
    trackMouse: true
  });

  useEffect(() => {
    if (isAutoPlay) {
      setInterval(() => {
        handleNext(children.length);
      }, intervalPage);
    }
  }, [isAutoPlay, intervalPage]);

  return (
    <CarouselContainer className="relative flex w-full flex-col gap-3" {...swipeHandlers}>
      <CarouselInner style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {children}
      </CarouselInner>
      <CarouselFooter
        handlePrev={() => handlePrev(pageSizeValueAuto)}
        handleNext={() => handleNext(pageSizeValueAuto)}
      />
    </CarouselContainer>
  );
};

export default Carousel;
