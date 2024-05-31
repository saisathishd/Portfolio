import "./hero.scss";
import { motion } from "framer-motion";
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};
const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>SAI SATHISH D</motion.h2>
          <motion.h1 variants={textVariants}>
            Java Fullstack Developer
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <button
              onClick={() => {
                window.location.href = "#Portfolio";
              }}
              variants={textVariants}
            >
              See the Latest Works
            </button>
            <button
              onClick={() => {
                window.location.href = "#Contact";
              }}
              variants={textVariants}
            >
              Contact Me
            </button>
          </motion.div>
          <motion.img
            src="/scroll.png"
            alt=""
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        	&#8712;at $leep &lt;ode &#340;epeat
      </motion.div>
    </div>
  );
};

export default Hero;
