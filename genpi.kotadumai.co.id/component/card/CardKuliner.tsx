import React from "react";
import Image from "next/image";
import { IoInformationCircleOutline, IoMapOutline } from "react-icons/io5";
import sate from "../../public/images/kuliner/sate.jpg";
import baksoRahayu from "../../public/images/kuliner/bakso rahayu.jpg";
import somayKartikaSari from "../../public/images/kuliner/somay kartika sari.jpg";
import cadMilkBar from "../../public/images/kuliner/matcha (Cad milk Bar).jpg";
import mieAcehRadja from "../../public/images/kuliner/mie aceh radja.jpg";
import miePangsitNurul from "../../public/images/kuliner/mie pangsit nurul.jpg";

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
    image: sate,
    label: "Kerupuk Ubi Cabe",
  },
  {
    image: baksoRahayu,
    label: "Dodol Nenas",
  },
  {
    image: mieAcehRadja,
    label: "Bolu Kemojo",
  },
];
