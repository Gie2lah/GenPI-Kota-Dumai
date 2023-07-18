/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-key */
import React from "react";
import { SiInstagram, SiTiktok, SiYoutube } from "react-icons/si";
import { IconType } from "react-icons/lib";
import {
  IoCallOutline,
  IoLocationOutline,
  IoMailOutline,
} from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import footerPicture from "../../public/images/logo/logo2.svg";
import UnstyledLink from "../../component/links/UnstyledLink";

const Footer = () => {
  return (
    <footer className="pt-4 bg-[url(../../public/images/bg-blob.svg)] min-h-[70vh] rounded-t-3xl md:rounded-t-[3rem]">
      <div className="mt-8 px-[14%]">
        <div className="flex justify-center flex-col sm:flex-row sm:justify-between items-center gap-y-4">
          <Image src={footerPicture} alt={"logo"} width={100} />
          <SocialLinks />
        </div>
        <div className="flex flex-wrap gap-8 mt-8 justify-between">
          <div className="flex flex-col max-w-md">
            <h4>Generasi Pesona Indonesia Kota Dumai</h4>
            <div className="">
              <Contact />
            </div>
          </div>
          <div className="flex flex-col max-w-md">
            <h4>GenPI Kota Dumai</h4>
            <div className="pt-2 flex flex-col gap-y-4">
              {links.map((link) => (
                <UnstyledLink href={link.href} className="hover:text-white">
                  {link.label}
                </UnstyledLink>
              ))}
            </div>
          </div>
          <div className="flex flex-col max-w-md">
            <h4>Tentang Kami</h4>
            <div className="flex flex-col gap-y-4 pt-2">
              {abouts.map((about) => (
                <UnstyledLink href={about.href} className="hover:text-white">
                  {about.label}
                </UnstyledLink>
              ))}
            </div>
          </div>
        </div>
        <hr className="mt-8" />
      </div>
      <div className="text-white text-center mt-4 pt-[10px] pb-[20px]">
        <p className="">© GenPI Dumai {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;

function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socials.map((social) => (
        <div className="flex items-center gap-x-4 py-2 bg-white rounded-full p-4">
          <Link href={social.href}>
            <p className="text-blue-500">{social.icon}</p>
          </Link>
          {/* <p className="text-base">{social.name}</p> */}
        </div>
      ))}
    </div>
  );
}

function Contact() {
  return (
    <div id="contact">
      {contacts.map((contact) => (
        <>
          <div className="flex items-center gap-x-4 py-2 ">
            {/* <p className="">{contact.name}</p> */}
            <p>{contact.desc}</p>
          </div>
        </>
      ))}
    </div>
  );
}

const contacts = [
  {
    name: <IoLocationOutline size={30} />,
    desc: `JL. Datuk Laksamana, No. 292, Dumai Kota, Kecamatan Dumai Kota, Kota Dumai, Riau
        28811`,
  },
  {
    name: <IoCallOutline size={30} />,
    desc: "0813-2937-5809",
  },
  {
    name: <IoMailOutline size={30} />,
    desc: "genpidumai12@gmail.com",
  },
];

const socials = [
  {
    icon: <SiInstagram size={20} />,
    href: "https://www.instagram.com/genpidumai/",
  },
  {
    icon: <SiYoutube size={20} />,
    href: "https://www.instagram.com/genpidumai/",
  },
  {
    icon: <SiTiktok size={20} />,
    href: "https://www.instagram.com/genpidumai/",
  },
];

const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Destinasi",
    href: "/destinasi",
  },
  {
    label: "Tentang Kami",
    href: "/profile",
  },
  {
    label: "Event",
    href: "/event",
  },
];

const abouts = [
  {
    label: "Program",
    href: "/profile",
  },
  {
    label: "Tujuan",
    href: "/profile",
  },
];
