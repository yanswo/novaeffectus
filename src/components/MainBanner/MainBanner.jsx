import React, { useRef, useMemo } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import "./MainBanner.css";

const FlowingWaveAnimation = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 70 }).map((_, index) => ({
      id: index,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
      size: Math.random() * 2.5 + 1,
    }));
  }, []);

  return (
    <div className="wave-container">
      {}
      <div className="wave-background" />

      {}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="particle"
          style={{
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            x: ["0%", "100%", "0%"],
            y: ["50%", "30%", "70%", "50%"],
            opacity: [0, 0.8, 0.8, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
};

const InteractivePhone = () => {
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothOptions = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothMouseX = useSpring(mouseX, smoothOptions);
  const smoothMouseY = useSpring(mouseY, smoothOptions);

  const rotateX = useTransform(smoothMouseY, [-280, 280], [-15, 15]);
  const rotateY = useTransform(smoothMouseX, [-280, 280], [15, -15]);

  const glareX = useTransform(smoothMouseX, [-200, 200], [-100, 200]);
  const glareY = useTransform(smoothMouseY, [-200, 200], [-100, 200]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - left - width / 2);
    mouseY.set(e.clientY - top - height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="interactive-phone-wrapper"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
    >
      <div className="phone-body">
        <div className="phone-screen">
          {}
          <FlowingWaveAnimation />
        </div>
        <motion.div className="phone-glare" style={{ x: glareX, y: glareY }} />
      </div>
    </motion.div>
  );
};

function MainBanner() {
  return (
    <section className="main-banner-section">
      <div className="container">
        <div className="main-banner-wrapper">
          <div className="main-banner-content">
            <h2 className="main-banner-title h5">
              Transferências Fáceis por toda a Europa
            </h2>
            <div className="main-banner-text">
              <p>Envie dinheiro de forma rápida e sem preocupações.</p>
            </div>
            <a href="#" className="btn btn-white btn-large">
              Baixe o App
            </a>
          </div>
          <div className="main-banner-media">
            <InteractivePhone />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainBanner;
