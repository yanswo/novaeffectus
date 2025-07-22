import React from "react";
import { useInView } from "react-intersection-observer";
import "./withReveal.css";

const withReveal = (WrappedComponent, options = {}) => {
  const {
    animation = "fade-in-up",
    threshold = 0.2,
    triggerOnce = true,
    delay = 0,
  } = options;

  return React.forwardRef((props, ref) => {
    const { ref: inViewRef, inView } = useInView({
      threshold,
      triggerOnce,
    });

    const combinedRef = (node) => {
      inViewRef(node);
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    };

    const animationStyles = {
      "--animation-delay": `${delay}ms`,
    };

    const className = `reveal ${animation} ${inView ? "revealed" : ""}`.trim();

    return (
      <WrappedComponent
        {...props}
        ref={combinedRef}
        revealClassName={className}
        revealStyle={animationStyles}
      />
    );
  });
};

export default withReveal;
