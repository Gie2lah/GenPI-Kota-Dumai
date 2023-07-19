import React from "react";
import getDestinasiMetaData from "../../../component/getDestinasiMetaData";
import DestinasiPreview from "../../../component/DestinasiPreview";
import UnstyledLink from "../../../component/links/UnstyledLink";
import Button from "../../../component/button/Button";
import Image from "next/image";
import bahterah from "../../../public/images/wisata/pantai-bahterah.jpg";
import koneng from "../../../public/images/wisata/pantai-koneng.jpg";
import rumahPohon from "../../../public/images/wisata/rumah-pohon.jpg";
import laMarinaCafe from "../../../public/images/wisata/la-marina-cafe.jpg";
import NelayanResto from "../../../public/images/wisata/nelayan-resto.jpg";
import pantaiAbi from "../../../public/images/wisata/pantai-abi.jpg";
import hero from "../../../public/images/destination1.png";
import PageWrapper from "../../../component/animation/PageWrapper";
import line from "../../../public/images/line.svg";
import line2 from "../../../public/images/line2.svg";
import { Metadata } from "next";
import Maps from "../../../component/Maps";

export const metadata: Metadata = {
  title: "Destinasi | GenPI Kota Dumai",
  description: "Destinasi Wisata di Kota Dumai",
  keywords: "wisata, destinasi, objek wisata",
};

const BlogPage = () => {
  const destinasiMetaData = getDestinasiMetaData();
  const destinasiPreviews = destinasiMetaData.map((destinasi) => (
    <DestinasiPreview key={destinasi.slug} {...destinasi} />
  ));
  return (
    <>
      <PageWrapper>
        <>
          <section className="min-h-screen py-[120px] px-[10%] bg-gradient-to-tr from-primary-500 to-primary-800">
            <div className="flex flex-wrap-reverse justify-center lg:justify-between items-center">
              <div className="w-full md:w-1/2">
                <h1 className="font-quick leading-relaxed">
                  Mulailah menikmati menjelajahi liburan impian Anda 🏖️
                </h1>
                <p className="mt-3 leading-relaxed">
                  GenPI selalu membuat pengunjung senang dengan memberikan
                  pilihan tempat wisata dengan rating terbaik.
                </p>
              </div>
              <div className="sm:flex justify-center max-w-md w-full md:w-1/2">
                <Image src={hero} alt="destinasi" className="bg-cover" />
              </div>
            </div>
          </section>
          <section className="min-h-screen py-[120px] px-[10%] bg-white">
            <div className="flex max-w-md relative">
              <h2 id="menu-kategori" className="relative z-[2]">
                Objek Wisata Populer
              </h2>
              <Image
                src={line}
                alt={"line"}
                className="absolute max-w-xs z-[1] top-1 w-52 md:w-72"
              />
            </div>
            <p className="mt-3 mb-3">
              Temukan destinasi yang ingin kamu datangi!
            </p>

            <div className="flex flex-wrap md:flex-nowrap gap-4">
              <div className="max-w-2xl">
                <Image
                  src={bahterah}
                  alt={"pantai bahterah"}
                  className="w-[800px] h-[300px] rounded-md drop-shadow-lg object-cover"
                />
              </div>
              <div className="max-w-sm">
                <Image
                  src={koneng}
                  alt={"pantai koneng"}
                  className="w-[600px] h-[300px] rounded-md drop-shadow-lg object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col mt-3">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
                <div className="max-w-sm">
                  <Image
                    src={laMarinaCafe}
                    alt={"La-Marina-Cafe"}
                    className="rounded h-[200px] w-[400px] object-cover object-center drop-shadow-lg"
                  />
                </div>
                <div className="max-w-sm">
                  <Image
                    src={NelayanResto}
                    alt={"Nelayan Resto"}
                    className="rounded h-[200px] w-[400px] object-cover object-center drop-shadow-lg"
                  />
                </div>
                <div className="max-w-sm">
                  <Image
                    src={pantaiAbi}
                    alt={"Pantai Abi"}
                    className="rounded h-[200px] w-[400px] object-cover object-center drop-shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="bg-white rounded-xl py-[120px] px-[10%]">
            <div className="bg-blue-500 border p-10 w-full rounded-3xl flex items-center justify-center drop-shadow-2xl">
              <div className="text-center">
                <p className="mb-6 font-bold">
                  Ayo bergabung dan berlibur bersama kami
                </p>
                <div className="flex justify-center max-w-md relative">
                  <h2 id="menu-kategori" className="lg:pl-12 relative z-[2]">
                    Prepare yourself and lets explore
                  </h2>
                  <Image
                    src={line2}
                    alt={"line-lurus"}
                    className="absolute max-w-xs z-[1] bottom-0 md:top-1 w-52 md:w-72"
                  />
                </div>
                <p className="mb-6 font-bold">
                  Jelajahi keindahan objek wisata bersama teman Anda dan nikmati
                </p>
                <Button onClick={undefined} className="">
                  <UnstyledLink href="#destinasi">Explore now</UnstyledLink>
                </Button>
              </div>
            </div>
          </section>
          <section className="min-h-screen py-[120px] px-[10%] bg-white">
            <div className="w-full md:w-1/2">
              <div className="flex max-w-md relative">
                <h2 id="menu-kategori" className="relative z-[2]">
                  Objek Wisata Kota Dumai
                </h2>
                <Image
                  src={line}
                  alt={"line"}
                  className="absolute max-w-xs z-[1] top-1 w-52 md:w-72"
                />
              </div>
              <p className="mt-3">
                Kota Dumai memberikan banyak objek wisata yang sangat menarik
                untuk dikunjungi
              </p>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 rounded-md py-2 mt-3">
              {destinasiPreviews}
            </div>
          </section>
          <section className="min-h-screen px-[10%]">
            <div className="flex max-w-md relative mb-6">
              <h2 id="menu-kategori" className="relative z-[2]">
                Peta Wisata Kota Dumai
              </h2>
              <Image
                src={line}
                alt={"line"}
                className="absolute max-w-xs z-[1] top-1 w-52 md:w-72"
              />
            </div>
            <Maps />
          </section>
        </>
      </PageWrapper>
    </>
  );
};

export default BlogPage;
