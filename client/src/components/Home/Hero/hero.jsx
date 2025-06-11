import { useState, useEffect, useContext, useMemo } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../../../themeContext";
import { Typography } from "@mui/material";

const Hero = () => {
  const { mode } = useContext(ThemeContext);
  const [isMounted, setIsMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [currentImage, setCurrentImage] = useState(null);

  // Image paths for different screen sizes and themes, memoized to prevent re-creation
  const images = useMemo(
    () => ({
      light: {
        desktop: "/images/hero/heroLight.webp",
        tablet: "/images/hero/heroLightTablet.webp",
        mobile: "/images/hero/heroLightMobile.webp",
      },
      dark: {
        desktop: "/images/hero/heroDark.webp",
        tablet: "/images/hero/heroDarkTablet.webp",
        mobile: "/images/hero/heroDarkMobile.webp",
      },
    }),
    []
  );

  // Preload images to prevent white flash
  useEffect(() => {
    setIsMounted(true);
    const preloadImages = Object.values(images.light).concat(
      Object.values(images.dark)
    );
    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Handle window resize to update screen size
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Trigger animation only on mode change and update current image
  useEffect(() => {
    setShouldAnimate(true); // Enable animation when mode changes
    // Determine which image to use based on window width
    const getBackgroundImage = () => {
      if (windowWidth < 600) {
        return images[mode].mobile; // Mobile: <600px
      } else if (windowWidth >= 600 && windowWidth < 960) {
        return images[mode].tablet; // Tablet: 600px to 959px
      } else {
        return images[mode].desktop; // Desktop: >=960px
      }
    };
    setCurrentImage(getBackgroundImage());
  }, [mode, windowWidth, images]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Animation */}
      <motion.div
        className="absolute inset-0 w-full h-full bg-no-repeat"
        style={{
          backgroundImage: currentImage ? `url(${currentImage})` : "none",
          backgroundSize: windowWidth < 600 ? "cover" : "cover",
          backgroundPosition: "center",
          backgroundAttachment: windowWidth < 600 ? "scroll" : "scroll", // Prevents fixed issues on mobile
          minHeight: "85vh",
          minWidth: "100vw", // Full viewport width for mobile
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
        initial={shouldAnimate ? { y: -100, opacity: 0 } : false}
        animate={shouldAnimate ? { y: 0, opacity: 1 } : false}
        transition={
          shouldAnimate
            ? {
                y: { type: "spring", stiffness: 50, damping: 20, duration: 2 },
                opacity: { duration: 1.5 },
                delay: isMounted ? 0 : 0.4,
              }
            : {}
        }
        onAnimationComplete={() => setShouldAnimate(false)} // Disable animation after it runs once
        key={mode} // Key triggers mount/unmount on mode change only
      />

      {/* Overlay for Text Readability */}
      <div
        className="absolute inset-0 bg-black bg-opacity-30"
        style={{ zIndex: 2 }}
      />

      {/* Text Content - Positioned absolutely, responsive adjustments */}
      <div
        style={{
          position: "absolute",
          zIndex: 3,
          top: windowWidth < 600 ? "10%" : "15%", // Adjust top for mobile
          right: windowWidth < 600 ? "5%" : "13%", // Adjust right for mobile
          left: windowWidth < 600 ? "auto" : "auto",
          width: windowWidth < 600 ? "90%" : "auto", // Wider for mobile readability
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "primary.contrastText",
            fontWeight: 800,
          }}
        >
          Hi, my name is Stephen.
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: "primary.contrastText",
            fontWeight: 800,
          }}
        >
          I'm a full-stack web developer & UI/UX designer.
        </Typography>
      </div>
    </div>
  );
};

export default Hero;
