import React from "react";
import Image from "next/image";
import { IoInformationCircleOutline, IoMapOutline } from "react-icons/io5";
import dodolNenas from "../../public/images/kuliner/dodol-nenas.png";
import boluKemojo from "../../public/images/kuliner/bolu-kemojo.png";
import keripikUbi from "../../public/images/kuliner/keripik-ubi.png";

export default function CardKuliner() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {kuliner.map((k) => (
          <>
            <div className="max-w-md p-4 rounded-md bg-white drop-shadow-lg border">
              <div className="flex justify-center mb-3">
                <Image
                  src={k.image}
                  alt="sate"
                  className="rounded w-[200px]"
                  width={200}
                />
              </div>
              <div className="flex justify-center">
                <div className="text-center">
                  <p className="font-bold">{k.label}</p>
                  {/* <h5 className="harga">Rp.20.000</h5> */}
                  {/* <p className="">{k.name}</p> */}
                  {/* <p>{k.alamat}</p> */}
                </div>
              </div>
              <div className="flex items-center gap-4">
                {/* <p>⭐ 4.5</p> */}
                {/* <IoMapOutline />
                <IoInformationCircleOutline /> */}
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

const kuliner = [
  {
    image: keripikUbi,
    label: "Kerupik Ubi Cabe",
  },
  {
    image: dodolNenas,
    label: "Dodol Nenas",
  },
  {
    image: boluKemojo,
    label: "Bolu Kemojo",
  },
];
