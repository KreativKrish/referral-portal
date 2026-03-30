import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useScrollReveal = (dependency?: any) => {
  useLayoutEffect(() => {
    // A context is used to cleanly revert animations when the component unmounts
    let ctx = gsap.context(() => {
      
      // Select all elements with the 'gsap-reveal-up' class
      const revealElements = gsap.utils.toArray(".gsap-reveal-up") as HTMLElement[];
      
      revealElements.forEach((el) => {
        gsap.fromTo(el, 
          { opacity: 0, y: 50 }, 
          {
            opacity: 1, 
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%", // Animation starts when top of element hits 85% of viewport
              toggleActions: "play none none none" // Only play once
            }
          }
        );
      });

      // Special handling for stagger containers
      const staggerContainers = gsap.utils.toArray(".gsap-stagger-container") as HTMLElement[];
      staggerContainers.forEach((container) => {
        const items = container.querySelectorAll(".gsap-stagger-item");
        if (!items.length) return;
        
        gsap.fromTo(items,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: container,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, [dependency]);
};
