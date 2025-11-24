

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
// replace icons with your own if needed
import {
  FiCode,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const DEFAULT_ITEMS = [
  {
    title: "Quick Desk",
    description: "Revolutionary quick desk is coming soon!",
    id: 1,
    icon: <FiCode className="h-[16px] w-[16px] text-white" />,
    backgroundImage: "https://i.ibb.co/7NGSZ8DH/473684737-da787ca6-f7cc-4e46-8728-dc5407c4a2f6.jpg",
    link: "https://github.com/Strbeni/Odoo-QuickDesk",
  },
  {
    title: "Minimal StartPage",
    description: "Minimal And Fast and Customizable StartPage Extension!",
    id: 1,
    icon: <FiCode className="h-[16px] w-[16px] text-white" />,
    backgroundImage: "https://i.ibb.co/6cRfTfH9/image.png",
    link: "https://github.com/Strbeni/mstart",
  },
  {
    title: "Dolchico",
    description: "Ecommerce Platform For a Company",
    id: 1,
    icon: <FiCode className="h-[16px] w-[16px] text-white" />,
    backgroundImage: "https://i.ibb.co/5gmzhQdX/image.png",
    link: "https://dolchico.com/home",
  },
  {
    title: "RoadGuard",
    description: "Need Mechanic? RoadGuard is a platform to get instant Road Help.",
    id: 1,
    icon: <FiCode className="h-[16px] w-[16px] text-white" />,
    backgroundImage: "https://i.ibb.co/5gmzhQdX/image.png",
    link: "https://github.com/Strbeni/RoadGuard",
  },
]

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 2;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

function CardItem({ item, index, x, trackItemOffset, itemWidth, round, effectiveTransition }) {
  const range = [
    -(index + 1) * trackItemOffset,
    -index * trackItemOffset,
    -(index - 1) * trackItemOffset,
  ];
  const outputRange = [90, 0, -90];
  const rotateY = useTransform(x, range, outputRange, { clamp: false });

  return (
    <motion.div
      className={`relative row-start-2 row-span-2 shrink-0 flex flex-col ${round
        ? "items-center justify-center text-center bg-[#060010] border-0"
        : "items-start justify-between bg-[#222] border border-[#222] rounded-[12px]"
        } overflow-hidden cursor-grab active:cursor-grabbing`}
      style={{
        width: itemWidth,
        height: round ? itemWidth : "100%",
        rotateY: rotateY,
        ...(round && { borderRadius: "50%" }),
      }}
      transition={effectiveTransition}
    >
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block h-full w-full"
        draggable="false"
        onDragStart={(e) => e.preventDefault()} // Prevent native drag
      >
        {item.backgroundImage && (
          <>
            <div
              className="absolute inset-0 z-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.backgroundImage})` }}
            ></div>
            <div className="absolute inset-0 z-10 bg-black/60"></div>
          </>
        )}
        <div className={`relative z-20 flex flex-col h-full ${round ? "justify-center" : "justify-between"}`}>
          <div className={`${round ? "p-0 m-0" : "mb-4 p-5"}`}>
            <span className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#060010]">
              {item.icon}
            </span>
          </div>
          <div className="p-5">
            <div className="mb-1 font-black text-lg text-white">
              {item.title}
            </div>
            <p className="text-sm text-white">{item.description}</p>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

function ProjectCard({
  items = DEFAULT_ITEMS,
  baseWidth = 200,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
}) {
  const containerPadding = 16;
  // const itemWidth = baseWidth - containerPadding * 2;
  const itemWidth = typeof baseWidth === 'number'
    ? baseWidth - containerPadding * 2
    : 300 - containerPadding * 2; // default fallback

  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const containerRef = useRef(null);
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev === items.length - 1 && loop) {
            return prev + 1;
          }
          if (prev === carouselItems.length - 1) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [
    autoplay,
    autoplayDelay,
    isHovered,
    loop,
    items.length,
    carouselItems.length,
    pauseOnHover,
  ]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (loop) {
      setCurrentIndex(items.length - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (loop) {
      setCurrentIndex(0);
    }
  };

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        setCurrentIndex(items.length - 1);
      } else {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    }
  };

  const dragProps = loop
    ? {}
    : {
      dragConstraints: {
        left: -trackItemOffset * (carouselItems.length - 1),
        right: 0,
      },
    };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden p-4 ${round
        ? "rounded-lg border border-white"
        : "rounded-lg border border-[#222]"
        }`}
      style={{
        width: typeof baseWidth === 'number' ? `${baseWidth}px` : baseWidth,
        ...(round && { height: typeof baseWidth === 'number' ? `${baseWidth}px` : baseWidth }),
        maxWidth: "100%",
        overflow: "hidden"
      }}

    >
      <motion.div
        className="flex"
        drag="x"
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
          x,
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselItems.map((item, index) => (
          <CardItem
            key={index}
            item={item}
            index={index}
            x={x}
            trackItemOffset={trackItemOffset}
            itemWidth={itemWidth}
            round={round}
            effectiveTransition={effectiveTransition}
          />
        ))}
      </motion.div>
      <div
        className={`flex w-full justify-center ${round ? "absolute z-20 bottom-12 left-1/2 -translate-x-1/2" : ""
          }`}
      >
        <div className="mt-4 flex w-[150px] justify-between px-8">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 ${currentIndex % items.length === index
                ? round
                  ? "bg-white"
                  : "bg-[#333333]"
                : round
                  ? "bg-[#555]"
                  : "bg-[rgba(51,51,51,0.4)]"
                }`}
              animate={{
                scale: currentIndex % items.length === index ? 1.2 : 1,
              }}
              onClick={() => setCurrentIndex(index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>

      {!round && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
          >
            <FiChevronRight size={24} />
          </button>
        </>
      )}
    </div>
  );
}

export default ProjectCard

