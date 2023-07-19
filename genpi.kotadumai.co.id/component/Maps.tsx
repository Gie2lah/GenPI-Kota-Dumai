"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import leaflet from "leaflet";

const markerIcon = leaflet.divIcon({
  html: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 1080 1080" style="enable-background:new 0 0 1080 1080;" xml:space="preserve">
 <style type="text/css">
   .st0{fill:#E4212A;}
   .st1{fill:#EE1F40;}
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
    <MapContainer
      center={[1.6662014281526218, 101.39978074757886]}
      zoom={10}
      scrollWheelZoom={false}
      style={{ height: "400px", zIndex: 1 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[1.6424419303542612, 101.54584520178592]}
        icon={markerIcon}
      >
        <Popup>Pantai Koneng</Popup>
      </Marker>
      <Marker
        position={[1.6374906103162548, 101.55880671682021]}
        icon={markerIcon}
      >
        <Popup>Pantai Bahterah Alam Guntung</Popup>
      </Marker>
      <Marker
        position={[1.5922395576289952, 101.38350894921348]}
        icon={markerIcon}
      >
        <Popup>Rumah Makan Kampung Teratai</Popup>
      </Marker>
      <Marker
        position={[1.6436687356369295, 101.53771699466498]}
        icon={markerIcon}
      >
        <Popup>La Marina Cafe Dumai</Popup>
      </Marker>
      <Marker
        position={[1.6684816897766865, 101.49632003699452]}
        icon={markerIcon}
      >
        <Popup>Pesona Alam Mundam</Popup>
      </Marker>
      <Marker
        position={[1.6614308361599548, 101.4467681351483]}
        icon={markerIcon}
      >
        <Popup>Hutan Bukit Gelanggang</Popup>
      </Marker>
      <Marker
        position={[1.592700742848944, 101.38456039040203]}
        icon={markerIcon}
      >
        <Popup>Rumah Pohon Kota Dumai</Popup>
      </Marker>
      <Marker
        position={[1.642987492356408, 101.54053081980763]}
        icon={markerIcon}
      >
        <Popup>Pantai Marina</Popup>
      </Marker>
      <Marker
        position={[1.6900934101207663, 101.4315761259169]}
        icon={markerIcon}
      >
        <Popup>Kampung Nelayan Resto</Popup>
      </Marker>
      <Marker
        position={[1.8560938462464136, 101.34972183457747]}
        icon={markerIcon}
      >
        <Popup>Pantai basilam baru</Popup>
      </Marker>
    </MapContainer>
  );
}
