"use client";

import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // detect scroll
      setHeaderActive(window.scrollY > 50);
    };

    // add scroll event
    window.addEventListener("scroll", handleScroll);
    // clear scroll event
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        headerActive ? "h-[100px]" : "h-[124px]"
      } fixed left-0 right-0 w-full bg-primary-200 h-[100px]`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* logo */}
        <Link href="">
          <Image
            src={"/assets/img/logo.png"}
            width={117}
            height={55}
            alt="logo"
          />
        </Link>
        {/* mobile nav - hidden on desktop */}
        <MobileNav containerStyles="text-white xl:hidden " />
        {/* desktop nav - hidden on small devices */}
        <Nav containerStyles="flex gap-4 text-white hidden xl:flex" />
      </div>
    </header>
  );
};

export default Header;
