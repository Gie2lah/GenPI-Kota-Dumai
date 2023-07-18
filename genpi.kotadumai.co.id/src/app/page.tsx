/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import getDestinasiMetaData from "../../component/getDestinasiMetaData";
import DestinasiPreview from "../../component/DestinasiPreview";
import { IoRestaurantOutline } from "react-icons/io5";
import UnstyledLink from "../../component/links/UnstyledLink";
import Button from "../../component/button/Button";
import KategoriCard from "../../component/card/CardKategori";
import PageWrapper from "../../component/animation/PageWrapper";
import CardKuliner from "../../component/card/CardKuliner";
import CardSouvenir from "../../component/card/CardSouvenir";
import CardPenginapan from "../../component/card/CardPenginapan";
import line from "../../public/images/line.svg";
import logo2 from "../../public/images/logo/logo2.svg";

export default function Home() {
  const destinasiMetaData = getDestinasiMetaData();
  const destinasiPreviews = destinasiMetaData
    .slice(0, 6)
    .map((destinasi) => (
      <DestinasiPreview key={destinasi.slug} {...destinasi} />
    ));
  return (
    <>
      <PageWrapper>
        <>
          {/* Hero */}
          <section className="bg-[url(../../public/images/bg-blob.svg)] bg-no-repeat bg-cover min-h-screen flex flex-col items-center pt-[120px] text-white rounded-b-xl">
            <div className="flex flex-col mx-auto items-center justify-center">
              <div className="w-full flex justify-center">
                <h1 className="font-cinzel w-full sm:w-[70%] text-center font-secondary">
                  Generasi Pesona Indonesia <span>Kota Dumai</span>
                </h1>
              </div>
              <div className="">
                <Image
                  src={logo2}
                  alt={"logo genpi"}
                  width={300}
                  height={300}
                  className=""
                />
              </div>
            </div>
          </section>

          {/* Kategori */}
          <section className="min-h-screen pt-[120px] px-[10%] bg-white">
            <div className="flex max-w-xs relative">
              <h2 id="menu-kategori" className="relative z-[2]">
                Menu Kategori
              </h2>
              <Image
                src={line}
                alt={"line"}
                className="absolute max-w-xs z-[1] top-2 w-36 md:w-52"
              />
            </div>
            <div className="rounded-sm py-2 mt-3">
              <div className="grid ">
                <KategoriCard />
                <div className="bg-white p-4 max-w-md rounded-md border hidden ">
                  <ul className="p-4">
                    <UnstyledLink href={"#"}>
                      <div className="flex items-center justify-center">
                        <IoRestaurantOutline className="lg:text-5xl text-4xl" />
                      </div>
                      <p className="text-center mt-3 font-bold">Restaurant</p>
                    </UnstyledLink>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Destinasi Objek Wisata */}
          <section className="min-h-screen pt-[120px] px-[10%] bg-white">
            <div className="flex max-w-md relative">
              <h2 id="menu-kategori" className="relative z-[2]">
                Destinasi Wisata
              </h2>
              <Image
                src={line}
                alt={"line"}
                className="absolute max-w-xs z-[1] top-2 w-40 md:w-60"
              />
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-6 ">
              {destinasiPreviews}
            </div>
            <Button className={"mt-3"} onClick={undefined}>
              <UnstyledLink href="/destinasi">Wisata Lainnya</UnstyledLink>
            </Button>
            <div className="hidden">
              <button className="border py-2 px-4 bg-white font-bold rounded-md shadow-md drop-shadow-md hover:scale-[1.02]">
                get
              </button>
            </div>
          </section>
          <section className="min-h-screen pt-[120px] px-[10%] bg-white">
            <div className="flex max-w-md relative">
              <h2 id="menu-kategori" className="relative z-[2]">
                Kuliner Kota Dumai
              </h2>
              <Image
                src={line}
                alt={"line"}
                className="absolute max-w-xs z-[1] top-1 w-52 md:w-72"
              />
            </div>
            <div className="mt-6">
              <CardKuliner />
              <Button className={"mt-3"} onClick={undefined}>
                <UnstyledLink href="/destinasi">Kuliner Lainnya</UnstyledLink>
              </Button>
            </div>
          </section>
          <section className="min-h-screen px-[10%] bg-white">
            <div className="flex max-w-md relative">
              <h2 id="menu-kategori" className="relative z-[2]">
                Souvenir Kota Dumai
              </h2>
              <Image
                src={line}
                alt={"line"}
                className="absolute max-w-xs z-[1] top-1 w-52 md:w-80"
              />
            </div>
            <div className="mt-6">
              <CardSouvenir />
              <Button className={"mt-3"} onClick={undefined}>
                <UnstyledLink href="/destinasi">Souvenir Lainnya</UnstyledLink>
              </Button>
            </div>
          </section>
          <section className="min-h-screen py-[120px] px-[10%] bg-white">
            <div className="flex max-w-md relative">
              <h2 id="menu-kategori" className="relative z-[2]">
                Penginapan Kota Dumai
              </h2>
              <Image
                src={line}
                alt={"line"}
                className="absolute max-w-xs z-[1] top-1 w-52 md:w-96"
              />
            </div>
            <div className="mt-6">
              <CardPenginapan />
              <Button className={"mt-3"} onClick={undefined}>
                <UnstyledLink href="/destinasi">
                  Penginapan Lainnya
                </UnstyledLink>
              </Button>
            </div>
          </section>
        </>
      </PageWrapper>
    </>
  );
}
