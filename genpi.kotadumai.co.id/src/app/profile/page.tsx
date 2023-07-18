"use client";
import React from "react";
import Button from "../../../component/button/Button";
import Image from "next/image";
import hero from "../../../public/images/logo/logo2.svg";
import UnstyledLink from "../../../component/links/UnstyledLink";
import ProgramSlider from "../../../component/card/ProgramSlider";
import TujuanCollapse from "../../../component/animation/Collapse";
import PageWrapper from "../../../component/animation/PageWrapper";
import line from "../../../public/images/line.svg";
import { Metadata } from "next";
import styles from "../../../component/styles/notFound.module.css";

export const metadata: Metadata = {
  title: "Profile | GenPI Kota Dumai",
  description: "Profile Generasi Pesona Indonesia Kota Dumai",
  keywords: "tentang kami, about us, profile",
};

export default function ProfilePage() {
  return (
    <>
      <PageWrapper>
        <>
          <section className={styles.background}>
            <div className="flex flex-wrap flex-col-reverse sm:flex-row md:flex-row items-center justify-between gap-y-8">
              <div className="sm:max-w-[50%]">
                <h1 className="leading-relaxed">
                  Generasi Pesona Indonesia Kota Dumai
                </h1>
                <p className="mt-3 leading-relaxed">
                  GenPI adalah singkatan dari Generasi Pesona Indonesia, yang
                  merupakan sebuah gerakan yang bertujuan untuk mempromosikan
                  potensi pariwisata, budaya, dan kreativitas Indonesia.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button>
                    <UnstyledLink href={"#about"}>Explore GenPI</UnstyledLink>
                  </Button>
                  <Button>
                    <UnstyledLink href={"#contact"}>Contact GenPI</UnstyledLink>
                  </Button>
                </div>
              </div>
              <div className="flex sm:max-w-[50%] justify-end">
                <Image
                  src={hero}
                  alt={"hero"}
                  width={400}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>
          </section>
          <section className="min-h-[50vh] px-[10%] py-[120px]">
            <div id="about" className="flex flex-wrap justify-between gap-y-3">
              <div className="w-full md:w-[40%] text-black">
                <div className="flex max-w-md relative">
                  <h2 id="menu-kategori" className="relative z-[2]">
                    Program GenPI
                  </h2>
                  <Image
                    src={line}
                    alt={"line"}
                    className="absolute max-w-xs z-[1] top-1 w-40 md:w-56"
                  />
                </div>
                <p className="mt-3">
                  GenPI telah melaksanakan berbagai program dan inisiatif untuk
                  mempromosikan potensi pariwisata, budaya, dan ekonomi kreatif
                  Indonesia.
                </p>
              </div>
              <div className="w-full md:w-[50%]">
                <ProgramSlider />
              </div>
            </div>
          </section>
          <section className="min-h-[100vh] bg-white px-[10%] py-[120px]">
            <div className="text-center mb-6">
              <div className="flex mx-auto justify-center max-w-md relative">
                <h2 id="menu-kategori" className="relative z-[2]">
                  Tujuan GenPI
                </h2>
                <Image
                  src={line}
                  alt={"line"}
                  className="absolute max-w-xs z-[1] top-1 w-52 md:w-72"
                />
              </div>
              <p>
                Tujuan utama dari GenPI adalah mempromosikan potensi pariwisata,
                budaya, dan kreativitas Indonesia.
              </p>
            </div>
            <div className="flex flex-wrap-reverse justify-center lg:justify-between items-center">
              <TujuanCollapse />
            </div>
          </section>
        </>
      </PageWrapper>
    </>
  );
}
