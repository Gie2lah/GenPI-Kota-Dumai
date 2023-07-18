"use client";
import { Collapse, Text } from "@nextui-org/react";
import React, { useState } from "react";
import program1 from "../../public/images/program/kekayaan-alam.jpg";
import program2 from "../../public/images/program/aktif.jpg";
import program3 from "../../public/images/program/kreatif.jpg";
import program4 from "../../public/images/program/jumlah-wisatawan.jpg";
import Image, { StaticImageData } from "next/image";

const textImageMap = [
  {
    title: "Memperkenalkan kekayaan alam dan keindahan budaya Indonesia",
    imageSrc: program1,
    desc: `GenPI ingin meningkatkan kesadaran masyarakat Indonesia dan dunia terhadap kekayaan alam dan keanekaragaman budaya yang dimiliki Indonesia. Mereka berupaya mempromosikan destinasi wisata yang menarik dan memperkenalkan tradisi, tarian, musik, kuliner, dan seni yang unik dari berbagai daerah di Indonesia.`,
  },
  {
    title: "Mendorong partisipasi aktif generasi muda",
    imageSrc: program2,
    desc: `GenPI mengajak generasi muda Indonesia untuk berperan aktif dalam mempromosikan potensi Indonesia di dunia maya. Mereka ingin mendorong partisipasi generasi muda dalam menghasilkan konten kreatif, seperti foto, video, artikel, dan vlog yang memperlihatkan keindahan dan daya tarik Indonesia.`,
  },
  {
    title: "Mendukung pengembangan ekonomi kreatif",
    imageSrc: program3,
    desc: `GenPI juga berkomitmen untuk mendukung pengembangan ekonomi kreatif di Indonesia. Mereka mendorong generasi muda untuk mengembangkan bakat dan kreativitas mereka dalam bidang-bidang seperti seni, musik, desain, kuliner, dan industri kreatif lainnya. Dengan demikian, GenPI berharap dapat menciptakan peluang kerja dan pertumbuhan ekonomi yang berkelanjutan.`,
  },
  {
    title: "Meningkatkan jumlah wisatawan",
    imageSrc: program4,
    desc: `Salah satu tujuan penting GenPI adalah meningkatkan jumlah kunjungan wisatawan baik dari dalam maupun luar negeri ke Indonesia. Dengan mempromosikan destinasi wisata yang menarik, GenPI berharap dapat meningkatkan minat wisatawan untuk mengunjungi dan menikmati keindahan alam serta keanekaragaman budaya Indonesia.`,
  },
];

const TujuanCollapse = () => {
  const [currentImageSrc, setCurrentImageSrc] = useState(
    textImageMap[0].imageSrc
  );

  const handleCollapseClick = (
    imageSrc: StaticImageData | React.SetStateAction<string>
  ) => {
    if (imageSrc !== currentImageSrc) {
      setCurrentImageSrc(imageSrc);
    }
  };

  return (
    <>
      <div className="max-w-md">
        <Collapse.Group className="">
          {textImageMap.map((textImage, index) => (
            <Collapse
              key={index}
              onClick={() => handleCollapseClick(textImage.imageSrc)}
              title={<Text h4>{textImage.title}</Text>}
            >
              <Text className="text-black">{textImage.desc}</Text>
            </Collapse>
          ))}
        </Collapse.Group>
      </div>
      <div className="max-w-md flex justify-center">
        <Image
          src={currentImageSrc}
          alt="gambar-tujuan-genpi"
          width={400}
          className="object-cover"
        />
      </div>
    </>
  );
};

export default TujuanCollapse;
