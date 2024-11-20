import { ABOUT_TEXT } from "../constants"
import headshot from "../assets/headshot.png"
import { motion } from "framer-motion";

// Adjusted container function to accept delay
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay, // Use delay correctly here
    },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)} // Apply delay 0 for h1
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Ivan Yu
            </motion.h1>
            <motion.span
              variants={container(0.5)} // Apply delay 0.5 for span
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Computer Science Student
            </motion.span>
            <motion.p
              variants={container(1)} // Apply delay 1 for p tag
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {ABOUT_TEXT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img 
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                src={headshot} 
                alt="headshot" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

