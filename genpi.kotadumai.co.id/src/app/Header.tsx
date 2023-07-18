"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo/logo2.svg";
import UnstyledLink from "../../component/links/UnstyledLink";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Header = () => {
  const currentRoute = usePathname();
  let [open, setOpen] = useState(false);
  return (
    <header className=" right-0 left-0 fixed z-30 text-black font-bold ">
      <nav className="sm:flex items-center justify-between px-[10%] py-[10px] shadow-md drop-shadow-md bg-blue-500 bg-clip-padding backdrop-filter backdrop-blur-[2px] bg-opacity-20">
        <Link href="/">
          <Image src={logo} alt={"logo-genpi"} width={50} height={50} />
        </Link>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer sm:hidden"
        >
          {open ? <IoMdClose /> : <IoMdMenu />}
        </div>
        <ul
          className={`bg-white flex flex-col drop-shadow-lg text-center sm:bg-transparent gap-4 sm:flex sm:flex-row pt-4 sm:items-center sm:pb-0 pb-12 absolute sm:static sm:z-auto left-0 w-full sm:w-auto transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {links.map(({ href, label }) => (
            <>
              <li key={`${href}${label}`}>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <UnstyledLink
                    href={href}
                    className={clsx(
                      "hover:text-blue-300",
                      href === currentRoute && "!text-blue-300"
                    )}
                  >
                    {label}
                  </UnstyledLink>
                </motion.div>
              </li>
            </>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

const links = [
  { href: "/", label: "Home" },
  { href: "/destinasi", label: "Destinasi" },
  { href: "/profile", label: "Profile" },
  { href: "/event", label: "Event" },
  // { href: "/oleh-oleh", label: "Oleh-oleh" },
  // { href: "/penginapan", label: "Penginapan" },
  // { href: "/makanan", label: "Makanan" },
];
