import { useState, useEffect, useContext, useMemo } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../../../themeContext";
import { Typography, Container } from "@mui/material";

const Hero = () => {
  const { mode } = useContext(ThemeContext);
  const [isMounted, setIsMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [currentImage, setCurrentImage] = useState(null);

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

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setShouldAnimate(true);
    const getBackgroundImage = () => {
      if (windowWidth < 600) {
        return images[mode].mobile;
      } else if (windowWidth >= 600 && windowWidth < 960) {
        return images[mode].tablet;
      } else {
        return images[mode].desktop;
      }
    };
    setCurrentImage(getBackgroundImage());
  }, [mode, windowWidth, images]);

  return (
    <Container
      maxWidth={false}
      sx={{
        padding: 0,
        margin: 0,
        width: "100%",
        overflowX: "hidden",
        // Override padding for all screen sizes
        "&.MuiContainer-root": {
          paddingLeft: 0,
          paddingRight: 0,
          "@media (min-width: 600px)": {
            paddingLeft: 0,
            paddingRight: 0,
          },
        },
      }}
    >
      <div className="relative w-full h-screen">
        <motion.div
          className="absolute inset-0 w-full h-full bg-no-repeat"
          style={{
            backgroundImage: currentImage ? `url(${currentImage})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "scroll",
            minHeight: "85vh",
            width: "100vw",
            height: "100%",
            zIndex: 1,
          }}
          initial={shouldAnimate ? { y: -100, opacity: 0 } : false}
          animate={shouldAnimate ? { y: 0, opacity: 0.7 } : false}
          transition={
            shouldAnimate
              ? {
                  y: { type: "spring", stiffness: 50, damping: 20, duration: 2 },
                  opacity: { duration: 1.5 },
                  delay: isMounted ? 0 : 0.4,
                }
              : {}
          }
          onAnimationComplete={() => setShouldAnimate(false)}
          key={mode}
        />

        <div
          className="absolute inset-0 bg-black bg-opacity-30"
          style={{ zIndex: 2 }}
        />

        <div
          style={{
            position: "absolute",
            zIndex: 3,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: 0,
            boxSizing: "border-box",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "primary.contrastText",
              fontWeight: 800,
              textAlign: "center",
              width: "100%",
              maxWidth: "100%",
              px: { xs: 2, sm: 3, md: 4 }, // Small padding for text readability
            }}
          >
            I'm Stephen,
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "primary.contrastText",
              fontWeight: 800,
              textAlign: "center",
              width: "100%",
              maxWidth: "100%",
              px: { xs: 2, sm: 3, md: 4 },
            }}
          >
            a full-stack web developer and UI/UX designer.
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default Hero;