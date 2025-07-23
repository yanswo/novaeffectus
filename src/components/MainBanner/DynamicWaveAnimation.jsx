import React, { useMemo } from "react";
import { motion } from "framer-motion";
import "./MainBanner.css";

const DynamicWaveAnimation = () => {
  const particles = useMemo(() => {
    const allParticles = [];
    const particleCounts = {
      mist: 120,
      core: 80,
      sparkle: 25,
    };

    for (const type in particleCounts) {
      for (let i = 0; i < particleCounts[type]; i++) {
        const yAmplitude = 30 + Math.random() * 50;
        const yOffset = (Math.random() - 0.5) * 80;
        const xStart = -150 - Math.random() * 40;
        const xEnd = 150 + Math.random() * 40;

        let props = {
          type,
          id: `${type}-${i}`,
          xKeyframes: [xStart, (xStart + xEnd) / 2, xEnd],
          yKeyframes: [
            yOffset,
            yOffset - yAmplitude,
            yOffset + yAmplitude,
            yOffset,
          ],
          size: 1 + Math.random() * 2,
          duration: 6 + Math.random() * 7,
          delay: Math.random() * 8,
          opacityKeyframes: [0, 1, 1, 0],
          scaleKeyframes: [0.5, 1, 0.5],
        };

        if (type === "mist") {
          props.size = 1 + Math.random() * 1.5;
          props.opacityKeyframes = [0, 0.5, 0.5, 0];
        }

        if (type === "sparkle") {
          props.size = 0.8 + Math.random() * 1.2;
          props.duration = 4 + Math.random() * 4;
          props.scaleKeyframes = [0.5, 1.5, 0.5];
        }

        allParticles.push(props);
      }
    }

    return allParticles.sort(() => Math.random() - 0.5);
  }, []);

  return (
    <div className="wave-container">
      <div className="wave-background" />
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`particle ${p.type}`}
          style={{ width: p.size, height: p.size }}
          animate={{
            x: p.xKeyframes,
            y: p.yKeyframes,
            opacity: p.opacityKeyframes,
            scale: p.scaleKeyframes,
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
};

export default DynamicWaveAnimation;
