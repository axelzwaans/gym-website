"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import { GoDotFill } from "react-icons/go";
import CustomButton from "./CustomButton";

const Hero = () => {
  return (
    <section
      className="h-screen bg-hero bg-cover bg-center bg-no-repeat"
      id="home"
    >
      <div className="container mx-auto">
        <div className="h-full flex justify-center md:justify-end pt-40 md:pt-[300px]">
          <div className="flex flex-col items-center md:items-start">
            <motion.h1
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
              className="h1 text-center md:text-left mb-2"
            >
              Life & Sole
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col items-center md:items-start text-center md:text-left pl-0 lg:pl-[6px]"
            >
              <p className="flex items-center text-sm md:text-lg uppercase py-2 tracking-[4px]">
                Health
                <span className="mx-2 mb-1">
                  <GoDotFill className="text-[#ff0000]" />
                </span>
                Fitness
                <span className="mx-2 mb-1">
                  <GoDotFill className="text-[#ff0000]" />
                </span>
                Performance
              </p>

              <p className="tracking-[3px] uppercase mt-28 md:mt-8 px-6 md:px-0 md:mb-8 text-white max-w-[520px]">
                Our unique gym emphasizes functional movement, integrating
                strength and conditioning as core elements for physical
                training, catering to both rehabilitation and sporting
                performance.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
              className="absolute bottom-4 md:relative md:bottom-0 pl-0 md:pl-[6px]"
            >
              <CustomButton
                text="Get started"
                containerStyles="w-[196px] h-[62px]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
