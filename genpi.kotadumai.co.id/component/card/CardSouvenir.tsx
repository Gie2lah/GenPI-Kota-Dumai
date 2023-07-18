import React from "react";
import keris from "../../public/images/souvenir/keris.jpg";
import telukBelanga from "../../public/images/souvenir/keris.jpg";
import songket from "../../public/images/souvenir/teluk belanga.jpg";
import tanjak from "../../public/images/souvenir/tanjak.jpg";
import Image from "next/image";

export default function CardSouvenir() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {souvenir.map((s) => (
          <>
            <div className="max-w-md p-4 rounded-md bg-white drop-shadow-lg border">
              <div className="flex justify-center mb-3">
                <Image
                  src={s.image}
                  alt="sate"
                  className="rounded w-[200px]"
                  width={200}
                  height={200}
                />
              </div>
              <div className="flex justify-center">
                <div className="text-center">
                  <h4>{s.label}</h4>
                  {/* <h5 className="harga">Rp.20.000</h5> */}
                  {/* <p className="">{s.name}</p> */}
                  {/* <p>{s.alamat}</p> */}
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

const souvenir = [
  {
    image: keris,
    label: "Keris Melayu",
    harga: "20000",
    name: "Sate Pak Kembus",
    alamat: "Jalan Parit Sadak",
  },
  {
    image: tanjak,
    label: "Tanjak Melayu",
    harga: "20000",
    name: "Martabak Kanti",
    alamat: "Jalan Sultan Hasanudin",
  },
  {
    image: telukBelanga,
    label: "Teluk Belanga",
    harga: "20000",
    name: "Sate Pak Kembus",
    alamat: "Jalan Parit Sadak",
  },
  {
    image: songket,
    label: "Songket Melayu",
    harga: "20000",
    name: "Sate Pak Kembus",
    alamat: "Jalan Parit Sadak",
  },
];
