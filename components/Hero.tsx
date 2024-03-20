"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import { GoDotFill } from "react-icons/go";

import CustomButton from "./CustomButton";

const Hero = () => {
  return (
    <section
      className="h-screen bg-hero bg-cover bg-center bg-no-repeat "
      id="home"
    >
      <div className="container mx-auto h-full">
        <div className="h-full flex justify-end pt-40 lg:pt-[300px]">
          <div className="flex flex-col items-center lg:items-start lg:max-w-[700px]">
            <motion.h1
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
              className="h1 text-center lg:text-left mb-2"
            >
              Life & Sole
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <p className="flex items-center text-sm lg:text-lg uppercase py-2 tracking-[4px]">
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

              <p className="tracking-[3px] uppercase mt-28 lg:mt-8 px-6 lg:px-0 lg:mb-8">
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
              className="absolute bottom-4 lg:relative lg:bottom-0"
            >
              <CustomButton
                text="Get started"
                containerStyles="w-[196px] h-[62px]"
              />
            </motion.div>
          </div>
        </div>
        {/* <HeroSlider /> */}
      </div>
    </section>
  );
};

export default Hero;
