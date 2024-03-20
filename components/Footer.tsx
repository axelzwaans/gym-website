"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { motion } from "framer-motion";
import CustomButton from "./CustomButton";

const footerContainerVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.6,
      duration: 0.5,
      ease: "linear",
    },
  },
};

const footerItem = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.6, 0.3, 0.8],
    },
  },
};

const Footer = () => {
  return (
    <footer className="bg-primary-300 pt-24">
      <div className="container mx-auto pb-24">
        <motion.div
          variants={footerContainerVariant}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="text-white grid grid-cols-1 xl:grid-cols-4 gap-x-8 gap-y-12"
        >
          <motion.div variants={footerItem} className="flex flex-col gap-4">
            <Link href="#">
              <Image
                src={"/assets/img/logo.jpg"}
                width={117}
                height={55}
                alt=""
              />
            </Link>
            <p className="max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
              ipsam.
            </p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-xl text-accent" />
                <span>Forres, Moray</span>
              </li>
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-xl text-accent" />
                <span>07737 883 263</span>
              </li>
              <li>
                <Link className="flex items-center gap-4" href="#">
                  <FaEnvelope className="text-xl text-accent" />
                  <span>gym@gmail.com</span>
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div variants={footerItem}>
            <h4 className="h4 text-accent mb-4">Recent blog posts</h4>
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link className="hover:text-accent transition-all" href="#">
                <h5 className="h5 leading-snug">How to stay motivated</h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  September 27, 2023
                </p>
              </Link>
            </div>
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link className="hover:text-accent transition-all" href="#">
                <h5 className="h5 leading-snug">Which diet works for you</h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  February 22, 2024
                </p>
              </Link>
            </div>
            <div className="flex flex-col gap-3 pb-3 mb-4">
              <Link className="hover:text-accent transition-all" href="#">
                <h5 className="h5 leading-snug">How to cope with burnout</h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  March 3, 2024
                </p>
              </Link>
            </div>
          </motion.div>
          <motion.div variants={footerItem}>
            <h4 className="h4 text-accent mb-4">Gallery</h4>
            <div className="flex flex-wrap gap-2">
              <Link href="#">
                <Image
                  src={"/assets/img/trainers/david.jpg"}
                  width={100}
                  height={100}
                  alt=""
                />
              </Link>
              <Link href="#">
                <Image
                  src={"/assets/img/trainers/matt.jpg"}
                  width={100}
                  height={100}
                  alt=""
                />
              </Link>
              <Link href="#">
                <Image
                  src={"/assets/img/trainers/rosy.jpg"}
                  width={100}
                  height={100}
                  alt=""
                />
              </Link>
              <Link href="#">
                <Image
                  src={"/assets/img/trainers/sofia.jpg"}
                  width={100}
                  height={100}
                  alt=""
                />
              </Link>
              <Link href="#">
                <Image
                  src={"/assets/img/trainers/david.jpg"}
                  width={100}
                  height={100}
                  alt=""
                />
              </Link>
              <Link href="#">
                <Image
                  src={"/assets/img/trainers/matt.jpg"}
                  width={100}
                  height={100}
                  alt=""
                />
              </Link>
              <Link href="#">
                <Image
                  src={"/assets/img/trainers/rosy.jpg"}
                  width={100}
                  height={100}
                  alt=""
                />
              </Link>
            </div>
          </motion.div>
          <motion.div variants={footerItem}>
            <h4 className="h4 text-accent mb-4">Newsletter</h4>
            <div className="flex flex-col gap-4">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perspiciatis nesciunt sapiente aliquam repellendus nihil, quas
                animi consequuntur facere deserunt facilis magni praesentium,
                dignissimos earum laborum iure ipsum ad labore sed.
              </p>
              <form action="" className="flex items-center">
                <input
                  type="text"
                  placeholder="Your email address"
                  className="h-[50px] outline-none px-4 text-primary-300"
                />

                <CustomButton containerStyles="h-[50px] px-8" text="Send" />
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="text-white border-t border-white/20 py-12">
        <div className="container mx-auto h-full">
          <div className="flex items-center justify-between h-full">
            <span>&copy; Copyright 2024 life&sole</span>
            <ul className="flex gap-4 text-xl">
              <li>
                <Link
                  className="text-white hover:text-accent transition-all"
                  href="#"
                >
                  <FaFacebook />
                </Link>
                <Link
                  className="text-white hover:text-accent transition-all"
                  href="#"
                >
                  <FaTwitter />
                </Link>
                <Link
                  className="text-white hover:text-accent transition-all"
                  href="#"
                >
                  <FaYoutube />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
