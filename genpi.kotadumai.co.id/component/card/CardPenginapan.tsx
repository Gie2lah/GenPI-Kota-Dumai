import React from "react";
import comfortaHotel from "../../public/images/penginapan/Comforta-Hotel-Dumai.jpg";
import patraDumaiHotel from "../../public/images/penginapan/Patra-Dumai-Hotel.jpg";
import grandZuriHotel from "../../public/images/penginapan/Hotel-Grand-Zuri-Dumai.jpg";
import sonaviewDumaiHotel from "../../public/images/penginapan/Hotel-Sonaview-Dumai.jpg";
import theZuriHotel from "../../public/images/penginapan/hotel-the-zuri-Dumai.jpg";
import citytelHotel from "../../public/images/penginapan/cititel-Dumai.jpg";
import Image from "next/image";

export default function CardPenginapan() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {penginapan.map((p) => (
          <>
            <div className="max-w-md p-4 rounded-md bg-white drop-shadow-lg border">
              <div className="flex justify-center mb-3">
                <Image
                  src={p.image}
                  alt="sate"
                  className="rounded w-[200px]"
                  width={200}
                  height={200}
                />
              </div>
              <div className="flex justify-center">
                <div className="text-center">
                  <p className="font-bold">{p.label}</p>
                  {/* <h5 className="harga">Rp.20.000</h5> */}
                  {/* <p className="font-bold">{p.name}</p> */}
                  <p>{p.alamat}</p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

const penginapan = [
  {
    image: grandZuriHotel,
    label: "Grand Zuri Hotel",
    alamat: "Jl. Jend. Sudirman No. 88, Bintan, Kota Dumai, Riau",
  },
  {
    image: citytelHotel,
    label: "Cititel Hotel",
    alamat: "Jl. Jend. Sudirman No. 429A, Kota Dumai, Riau",
  },
  {
    image: theZuriHotel,
    label: "The Zuri Hotel",
    alamat: "Jl. Jend. Sudirman No. 108, Kota Dumai, Riau",
  },
  {
    image: sonaviewDumaiHotel,
    label: "Sonaview Dumai Hotel",
    alamat: "Jl. Pattimura No. 40, Dumai Kota, Kota Dumai, Riau",
  },
  {
    image: patraDumaiHotel,
    label: "Patra Dumai Hotel",
    alamat: "Jl. Sultan Syarif Kasim, Buluh Kasap, Kota Dumai, Riau",
  },
  {
    image: comfortaHotel,
    label: "Comforta Hotel",
    alamat: "Jl. Jend. Sudirman, No. 58, Dumai Kota, Kota Dumai, Riau",
  },
];
