import React from "react";

export default function useCarouselHooks() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePrev = (children: number) => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? children - 1 : prevIndex - 1));
  };

  const handleNext = (children: number) => {
    setCurrentIndex((prevIndex) => (prevIndex === children - 1 ? 0 : prevIndex + 1));
  };

  return { currentIndex, handlePrev, handleNext, setCurrentIndex };
}
