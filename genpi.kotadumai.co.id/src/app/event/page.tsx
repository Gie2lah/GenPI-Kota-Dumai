import React from "react";
import PageWrapper from "../../../component/animation/PageWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event | GenPI Kota Dumai",
  description: "Event Generasi Pesona Indonesia Kota Dumai",
  keywords: "event, komunitas",
};

export default function EventPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen flex items-center justify-center bg-white">
        <h1>Coming Soon!</h1>
      </div>
    </PageWrapper>
  );
}
