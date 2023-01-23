export const blockAnimation = {
    visible: { opacity: 1, x:[400,0],
    transition:{ delay: 0.1, type: "tween", duration: 0.9 } },
    hidden: { x: 400, opacity: 0 },
  };
export const picAnimation = {
    visible: { opacity: 1, x:[-300, 0], transition: {  delay: 0.02, type: "tween", duration: 0.9} },
    hidden: { opacity: 0, }
  };