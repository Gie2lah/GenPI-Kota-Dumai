/* eslint-disable @next/next/no-img-element */
import React from "react";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getDestinasiMetaData from "../../../../component/getDestinasiMetaData";
import Image from "next/image";
import logo from "../../../../public/images/logo/logo2.svg";
import Button from "../../../../component/button/Button";
import PageWrapper from "../../../../component/animation/PageWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Objek Wisata | GenPI Kota Dumai",
  description: "Objek Wisata Kota Dumai",
  keywords: "pantai, laut, hutan, sunset, sunrise",
};

const getDestinasiContent = (slug: string) => {
  const folder = "contents/destinasi/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf-8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const destinasis = getDestinasiMetaData();
  return destinasis.map((destinasi) => ({
    slug: destinasi.slug,
  }));
};

const DestinasiPage = (props: any) => {
  const slug = props.params.slug;
  const destinasi = getDestinasiContent(slug);
  return (
    <PageWrapper>
      <section className="text-black px-[10%] pt-[80px] pb-[120px] bg-[#f5f5f5] min-h-screen">
        <div className="">
          <Image
            src={destinasi.data.cover}
            alt={""}
            className="rounded-lg object-cover"
            width={1200}
            height={1200 / 2}
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="border bg-white p-4 max-w-3xl lg:max-w-3xl w-full lg:w-[70%] mt-6 rounded-lg">
            <h1 className=" mb-2">{destinasi.data.title}</h1>
            <p>
              Written on {destinasi.data.date} by {destinasi.data.author}
            </p>
            <div className="block lg:flex gap-10">
              <article className="w-full prose prose-blockquote:font-bold prose-headings:text-sky-700 prose-blockquote:border-sky-600 prose-blockquote:bg-gray-400 prose-blockquote:p-1 prose-img:w-[200px] prose-img:h-[200px]">
                <div className="prose-base lg:prose-base prose-a:no-underline prose-figure:w-7">
                  <Markdown>{destinasi.content}</Markdown>
                </div>
              </article>
            </div>
          </div>
          <div className="lg:max-w-[347px] max-w-3xl lg:w-[30%]  ">
            <div className="bg-white border h-[400px] rounded-lg lg:mt-6 drop-shadow-lg">
              <div className="h-8 bg-black rounded-t-lg pt-8 pl-[78px] pr-1">
                <h4 className="text-black">GenPi Kota Dumai</h4>
              </div>
              <Image
                src={logo}
                alt={"logo-genpi"}
                className="w-14 h-14 rounded-full bg-white drop-shadow-lg border p-1 relative bottom-4 left-3"
              />
              <div className="px-4">
                <Button onClick={undefined} className={"w-full"}>
                  Follow Us
                </Button>
                <div className="mt-3">
                  <h5>Location</h5>
                  <p>Kota Dumai, Riau, Indonesia</p>
                </div>
                <div className="mt-3">
                  <h5>Work</h5>
                  <p>Objek wisata | Kebudayaan | Kuliner</p>
                </div>
                <div className="mt-3">
                  <h5>Bergabung</h5>
                  <p>2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default DestinasiPage;
