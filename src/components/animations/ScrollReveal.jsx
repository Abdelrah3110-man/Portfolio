import React from 'react'
import {useScrollReveal} from "../../hooks/useScrollReveal";


const ScrollReveal = (
  children,
  animation = 'fadeUp',
  delay = 0,
  duration = 700,
) => {
  const {ref, isVisible} = useScrollReveal({
    threshold: 0.1,
  });

  const animateClass = {
    fadeUp: 'opacity-0 translate-y-8',
    FadeIn: 'opacity-0',
    slideLift: 'opacity-0 -translate-x-8',
    slideRight: 'opacity-0 translate-x-8',
    ScaleIn: 'opacity-0 scale-90',
  };

  const visibleClass = "opacity-100 translate-y-0 translate-x-0 scale-100";

  return (
    <div
      ref={ref}
      className={`${isVisible ? visibleClass : animateClass[animation]} transition-all ease-out `}
      style={{
        transitionDelay:  `${delay}ms` ,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  )
}

export default ScrollReveal

