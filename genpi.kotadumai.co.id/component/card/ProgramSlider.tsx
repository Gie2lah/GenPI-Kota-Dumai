"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function ProgramSlider() {
  return (
    <Swiper spaceBetween={15} slidesPerView={1.05} navigation={true}>
      {programs.map((program) => {
        return (
          <>
            <SwiperSlide className="">
              <div className="flex bg-white border rounded-lg drop-shadow-lg p-4 rounde-md">
                <div className="min-h-[200px]">
                  <h4>{program.title}</h4>
                  <p>{program.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          </>
        );
      })}
    </Swiper>
  );
}

const programs = [
  {
    title: "Kampanye Pesona Indonesia",
    desc: `GenPI mengajak masyarakat untuk berbagi pengalaman dan foto-foto
      indah dari berbagai destinasi wisata di Indonesia melalui kampanye
      Pesona Indonesia. Melalui penggunaan media sosial dan tagar
      (#PesonaIndonesia), kampanye ini bertujuan untuk meningkatkan
      kesadaran dan minat wisatawan untuk mengunjungi Indonesia.`,
  },
  {
    title: "GenPI Goes to School",
    desc: `Program ini melibatkan generasi muda dalam kegiatan edukasi di sekolah-sekolah. GenPI bekerja sama dengan pihak sekolah untuk memberikan informasi tentang pariwisata, budaya, dan kreativitas Indonesia melalui presentasi, workshop, dan kegiatan interaktif lainnya.`,
  },
  {
    title: "Festival Kreativitas",
    desc: `Festival KreativitasGenPI menyelenggarakan festival kreativitas yang melibatkan seniman, desainer, musisi, dan pelaku industri kreatif dari berbagai bidang. Festival ini memberikan platform bagi mereka untuk memamerkan karya-karya mereka, mengadakan pertunjukan seni, dan berbagi inspirasi kepada generasi muda.`,
  },
  {
    title: "GenPI Youth Ambassador",
    desc: `GenPI memilih sejumlah pemuda dan pemudi Indonesia sebagai Duta GenPI. Mereka memiliki peran penting dalam mempromosikan pariwisata, budaya, dan ekonomi kreatif Indonesia melalui kegiatan-kegiatan mereka di media sosial, partisipasi dalam acara-acara GenPI, serta menjadi suara dan inspirasi bagi generasi muda lainnya.`,
  },
  {
    title: "GenPI Creative Hub",
    desc: `GenPI mendirikan pusat kreativitas atau "Creative Hub" yang menjadi tempat berkumpulnya para pelaku industri kreatif. Creative Hub ini menyediakan ruang kerja, fasilitas, dan program pelatihan bagi mereka yang ingin mengembangkan bakat dan kreativitas mereka.`,
  },
  {
    title: "Program Homestay Desa",
    desc: `GenPI berkolaborasi dengan pemerintah daerah dan masyarakat desa untuk mengembangkan program homestay di desa-desa wisata. Program ini memberikan kesempatan bagi wisatawan untuk tinggal bersama keluarga lokal dan merasakan kehidupan sehari-hari serta budaya Indonesia secara lebih mendalam.`,
  },
  {
    title: "Webinar dan Workshop",
    desc: `GenPI menyelenggarakan webinar dan workshop tentang pariwisata, budaya, dan ekonomi kreatif. Acara ini melibatkan ahli, praktisi, dan tokoh inspiratif untuk berbagi pengetahuan, pengalaman, dan tips kepada generasi muda yang tertarik dalam bidang-bidang tersebut.`,
  },
];
