import React from "react";
import UnstyledLink from "../links/UnstyledLink";
import profile from "../../public/images/icon-kategori/user.png";
import event from "../../public/images/icon-kategori/event.png";
import kuliner from "../../public/images/icon-kategori/food.png";
import penginapan from "../../public/images/icon-kategori/penginapan.png";
import souvenir from "../../public/images/icon-kategori/souvenir.png";
import ekonomiKreatif from "../../public/images/icon-kategori/ekonomi-creative.png";
import destinasi from "../../public/images/icon-kategori/destination.png";
import marketplace from "../../public/images/icon-kategori/marketplace.png";
import Image from "next/image";

export default function CardKategori() {
  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {kategoris.map(({ href, icon, label }) => (
          <>
            <div
              className="bg-white drop-shadow-lg p-4 max-w-md rounded-md border flex items-center justify-center"
              key={`${href}${icon}${label}`}
            >
              <ul className="p-4">
                <div className="flex items-center justify-center">
                  <div className="">
                    <Image src={icon} alt="icon" width={100} />
                  </div>
                </div>
                <UnstyledLink href={href}>
                  <p className="text-center mt-3 font-bold">{label}</p>
                </UnstyledLink>
              </ul>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

const kategoris = [
  {
    icon: destinasi,
    label: "Objek Wisata",
    href: "/destinasi",
  },
  {
    icon: profile,
    label: "Profile",
    href: "/profile",
  },
  {
    icon: event,
    label: "Event",
    href: "/event",
  },
  {
    icon: kuliner,
    label: "Kuliner",
    href: "/kuliner",
  },
  {
    icon: souvenir,
    label: "Souvenir",
    href: "/souvenir",
  },
  {
    icon: penginapan,
    label: "Penginapan",
    href: "/penginapan",
  },
  {
    icon: ekonomiKreatif,
    label: "Ekonomi Kreatif",
    href: "/ekonomi-kreatif",
  },
  {
    icon: marketplace,
    label: "Marketplace",
    href: "/marketplace",
  },
];
