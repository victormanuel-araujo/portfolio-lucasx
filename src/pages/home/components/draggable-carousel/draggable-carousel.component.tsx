import { animate, useMotionValue, motion, type PanInfo } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { DraggableCarouselProps } from "./draggable-carousel.types";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export const FramerDraggableCarousel = ({
  carousel,
}: DraggableCarouselProps) => {
  const [index, setIndex] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);

  const handlePrevious = () => {
    setIndex(index - 1);
    if (index === 0) {
      setIndex(carousel.length - 1);
    }
  };

  const handleNext = () => {
    setIndex(index + 1);
    if (index === carousel.length - 1) {
      setIndex(0);
    }
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    setIsDragging(false);
    const containerWidth = containerRef.current?.offsetWidth || 1;
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    let newIndex = index;

    if (Math.abs(velocity) > 500)
      newIndex = velocity > 0 ? index - 1 : index + 1;
    else if (Math.abs(offset) > containerWidth * 0.3)
      newIndex = offset > 0 ? index - 1 : index + 1;

    newIndex = Math.max(0, Math.min(carousel.length - 1, newIndex));
    setIndex(newIndex);
  };

  useEffect(() => {
    if (!isDragging && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth || 1;
      const targetX = -index * containerWidth;

      animate(x, targetX, {
        type: "spring",
        stiffness: 300,
        damping: 30,
      });
    }
  }, [index, x, isDragging]);

  return (
    <div className="w-full h-full">
      <div className="flex flex-col gap-3 h-full">
        <div
          className="relative overflow-hidden rounded-lg h-full"
          ref={containerRef}
        >
          {carousel.length > 1 && (
            <>
              <div className="w-10 h-full flex items-center justify-center ml-4 z-40 absolute">
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-black/50 cursor-pointer"
                  onClick={handlePrevious}
                >
                  <ChevronLeftIcon
                    className="text-white relative right-[1px]"
                    fontSize="large"
                    htmlColor="white"
                  />
                </div>
              </div>

              <div className="w-10 h-full flex items-center justify-center mr-4 z-40 absolute right-0">
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-black/50 cursor-pointer"
                  onClick={handleNext}
                >
                  <ChevronRightIcon
                    className="text-white relative left-[1px]"
                    fontSize="large"
                    htmlColor="white"
                  />
                </div>
              </div>
            </>
          )}

          <motion.div
            className="flex h-full"
            drag="x"
            dragElastic={0.2}
            dragMomentum={false}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            style={{ x }}
          >
            {carousel.map((item) => (
              <div
                key={item}
                className="shrink-0 w-full flex items-center justify-center relative"
                style={{
                  backgroundImage: `url(${item})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div
                  className="absolute inset-0 bg-black/50 z-0"
                  style={{
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                  }}
                />
                <img
                  src={item}
                  alt={item}
                  draggable={false}
                  className="w-auto max-h-full object-cover select-none pointer-events-none z-10"
                />
              </div>
            ))}
          </motion.div>

          {carousel.length > 1 && (
            <>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {carousel.map((_, i) => (
                  <div
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-3 w-3 cursor-pointer rounded-full transition-all border-1 border-white ${
                      i === index ? "w-8 bg-white" : "w-2 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
