"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import leaflet from "leaflet";
import UnstyledLink from "./links/UnstyledLink";

const markerIcon = leaflet.divIcon({
  html: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 1080 1080" style="enable-background:new 0 0 1080 1080;" xml:space="preserve">
   <style type="text/css">
     .st0{fill:#b21511;}
     .st1{fill:#b21511;}
   </style>
   <g>
     <path class="st0" d="M895.98,423.37c-5.24,55.6-23.06,106.6-51.93,154.12C752.61,727.88,661.31,878.33,570,1028.82
       c-6.99,11.52-14.92,21.14-30.2,19.85V568.33c4.93-0.53,9.86-1.17,14.79-1.57c49.5-4.13,89.94-25.62,122.37-63.05
       c64.07-73.95,51.36-194.68-26.33-254.4c-32.94-25.34-69.97-37.3-110.83-39.49c0-59.54-0.02-119.07-0.02-178.61h31.81
       c9.46,3.94,19.74,3.52,29.6,5.42c126.19,24.41,215.33,96.15,267.88,212.5C893.93,304.18,901.69,362.88,895.98,423.37z"/>
     <path class="st1" d="M418.14,520c33.76,32.45,75.28,46.91,121.66,48.33v480.34c-12.89,0.29-20.45-7.34-26.64-17.49
       c-34.4-56.51-68.98-112.91-103.44-169.37c-60.29-98.82-121.24-197.25-180.56-296.65c-36.39-61-50.94-127.87-45.98-198.93
       c7.1-102.09,50.43-186.08,128.03-251.92c51.29-43.53,111.07-69.77,177.97-79.21c6.3-0.88,12.98-0.46,18.79-3.89h31.81
       c0,59.54,0.02,119.07,0.02,178.61c-15.56,0.82-31.13,2.06-46.1,6.57c-67.3,20.27-111.62,64.16-127.7,132.56
       C350.47,414.99,369.17,472.89,418.14,520z"/>
   </g>
   </svg>`,
  iconSize: [32, 32],
  iconAnchor: [32 / 2, 32],
  className: "foo",
});

export default function Maps() {
  return (
    <div>
      <MapContainer
        center={[1.6662014281526218, 101.39978074757886]}
        zoom={10}
        scrollWheelZoom={true}
        style={{ height: "400px", zIndex: 1 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {maps.map(({ position, popup, name }) => (
          <>
            <Marker position={position} icon={markerIcon}>
              <Popup>
                <p className="font-bold">{name}</p>
                {popup}
              </Popup>
            </Marker>
          </>
        ))}
      </MapContainer>
    </div>
  );
}

const maps = [
  {
    position: [1.6424419303542612, 101.54584520178592],
    name: "Pantai Koneng",
    popup: (
      <UnstyledLink href="https://www.google.com/maps/place/Pantai+Koneng/@1.6416483,101.5355884,15z/data=!3m1!4b1!4m6!3m5!1s0x31d3baa07803e157:0xcaf2873131247444!8m2!3d1.6416269!4d101.5458882!16s%2Fg%2F11fxfxrt5q?entry=ttu">
        Lihat Rute
      </UnstyledLink>
    ),
  },
  {
    position: [1.5922395576289952, 101.38350894921348],
    name: "Rumah Makan kampung Teratai",
    popup: (
      <UnstyledLink href="https://www.google.com/maps/place/RM+Kampung+Teratai/@1.5924175,101.3804058,17z/data=!3m1!4b1!4m6!3m5!1s0x31d3a76584827c6d:0x2c5a5e2a261cd84f!8m2!3d1.5924121!4d101.3829807!16s%2Fg%2F11g2xd67j1?entry=ttu">
        Lihat Rute
      </UnstyledLink>
    ),
  },
  {
    position: [1.6374906103162548, 101.55880671682021],
    name: "Pantai Bahterah Alam Guntung",
    popup: (
      <UnstyledLink href="https://www.google.com/maps/place/Pantai+Wisata+Bahtera+Alam+Guntung/@1.6373207,101.5562074,17z/data=!3m1!4b1!4m6!3m5!1s0x31d3afc447fab813:0x39cac0d1df604f3c!8m2!3d1.6373153!4d101.5587823!16s%2Fg%2F11fct4nwt7?entry=ttu">
        Lihat Rute
      </UnstyledLink>
    ),
  },
  {
    position: [1.6436687356369295, 101.53771699466498],
    name: "La Marina Cafe Dumai",
    popup: (
      <UnstyledLink href="https://www.google.com/maps/place/La+Marina+Cafe+Dumai/@1.6434382,101.5351421,17z/data=!3m1!4b1!4m6!3m5!1s0x31d3b196ca2c1f13:0x5ebb2dc9f641dd01!8m2!3d1.6434328!4d101.537717!16s%2Fg%2F11lkdwspl7?entry=ttu">
        Lihat Rute
      </UnstyledLink>
    ),
  },
  {
    position: [1.6684816897766865, 101.49632003699452],
    name: "Pantai Pesona Alam Mundam",
    popup: (
      <UnstyledLink href="https://www.google.com/maps/place/Pantai+Pesona+Alam+Mundam/@1.6683584,101.4937666,17z/data=!3m1!4b1!4m6!3m5!1s0x31d3af4c55746fb9:0x4a138c7be776ce1f!8m2!3d1.668353!4d101.4963415!16s%2Fg%2F11n0zk7k23?entry=ttu">
        Lihat Rute
      </UnstyledLink>
    ),
  },
  {
    position: [1.6614308361599548, 101.4467681351483],
    name: "Hutan Bukit Gelanggang",
    popup: (
      <UnstyledLink href="https://www.google.com/maps/place/Taman+Bukit+Gelanggang/@1.6614362,101.4442469,17z/data=!3m1!4b1!4m6!3m5!1s0x31d3af47951fa185:0x467a62ea413107dd!8m2!3d1.6614308!4d101.4468218!16s%2Fg%2F11bzq2w57q?entry=ttu">
        Lihat Rute
      </UnstyledLink>
    ),
  },
  {
    position: [1.592700742848944, 101.38456039040203],
    name: "Rumah Pohon Miaki Dumai",
    popup: (
      <UnstyledLink href="https://www.google.com/maps/place/Resto+Rumah+Pohon+Miaki/@1.5925131,101.3815778,17z/data=!3m1!4b1!4m6!3m5!1s0x31d3a7283f64002d:0xad83ee8e14a92e6a!8m2!3d1.5925077!4d101.3841527!16s%2Fg%2F11gw310v70?entry=ttu">
        Lihat Rute
      </UnstyledLink>
    ),
  },
  {
    position: [1.642987492356408, 101.54053081980763],
    name: "Pantai Marina",
    popup: (
      <UnstyledLink href="https://www.google.com/maps/place/Pantai+marina/@1.6426336,101.5298985,15z/data=!3m1!4b1!4m6!3m5!1s0x31d3b009dc44c601:0x39fd0dcfd56053dd!8m2!3d1.6426122!4d101.5401983!16s%2Fg%2F11bzz1dlb9?entry=ttu">
        Lihat Rute
      </UnstyledLink>
    ),
  },
  {
    position: [1.6900934101207663, 101.4315761259169],
    name: "Kampung Nelayan Resto",
    popup: (
      <UnstyledLink href="https://www.google.com/maps/place/Kampoeng+Nelayan+Resto/@1.6894768,101.4289691,17z/data=!3m1!4b1!4m6!3m5!1s0x31d3a9ec46d4d9a9:0x1680b9d3c5cf47f3!8m2!3d1.6894714!4d101.431544!16s%2Fg%2F11llt2hl7b?entry=ttu">
        Lihat Rute
      </UnstyledLink>
    ),
  },
  {
    position: [1.8560938462464136, 101.34972183457747],
    name: "Pantai Basilam Baru",
    popup: (
      <UnstyledLink href="https://www.google.com/maps/place/Pantai+Basilam+Baru/@1.8559384,101.3466856,17z/data=!4m14!1m7!3m6!1s0x31d2553b5abf7665:0x5261b8ab72c3987f!2sPantai+Basilam+Baru!8m2!3d1.855933!4d101.3492605!16s%2Fg%2F11tfv_2b0c!3m5!1s0x31d2553b5abf7665:0x5261b8ab72c3987f!8m2!3d1.855933!4d101.3492605!16s%2Fg%2F11tfv_2b0c?entry=ttu">
        Lihat Rute
      </UnstyledLink>
    ),
  },
];
