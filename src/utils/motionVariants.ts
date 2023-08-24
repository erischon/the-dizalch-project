export const slideBottomToTopVariants = {
  initial: {
    opacity: 0,
    transform: "translateY(250px)",
  },
  animate: { opacity: 1, transform: "translateY(0)" },
};

export const slideTopToBottomVariants = {
  initial: {
    opacity: 0,
    transform: "translateY(-250px)",
  },
  animate: { opacity: 1, transform: "translateY(0)" },
};

export const slideRightToLeftVariants = {
  initial: {
    opacity: 0,
    transform: "translateX(250px)",
  },
  animate: { opacity: 1, transform: "translateX(0)" },
};

export const slideLeftToRightVariants = {
  initial: {
    opacity: 0,
    transform: "translateX(-250px)",
  },
  animate: { opacity: 1, transform: "translateX(0)" },
};
