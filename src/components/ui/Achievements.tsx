import Image from "next/image";
import React, { FC } from "react";

const Achievements: FC = () => {
  return (
    <section className="max-w-5xl mx-auto my-auto">
      <h1 className="text-4xl font-bold text-center my-8">
        Adopted and loved by millions of users for over a decade
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="border bg-gray-200 rounded-2xl p-2">
          <Image
            src="/images/globalCustomerIcon.svg"
            width={100}
            height={100}
            alt="global customers"
          />
          <span className="text-7xl text-black font-bold">500K</span>
          <p className="my-4">Global paying customers</p>
        </div>
        <div className="border bg-gray-200 rounded-2xl p-2">
          <Image
            src="/images/qrLink.svg"
            width={100}
            height={100}
            alt="links qr codes"
          />
          <span className="text-7xl text-black font-bold">256M</span>
          <p className="my-4">Links & QR Codes created monthly</p>
        </div>
        <div className="border bg-gray-200 rounded-2xl p-2">
          <Image
            src="/images/AppIntegrationIcon.svg"
            width={100}
            height={100}
            alt="App Integration"
          />
          <span className="text-7xl text-black font-bold">800+</span>
          <p className="my-4">App integrations</p>
        </div>
        <div className="border bg-gray-200 rounded-2xl p-2">
          <Image
            src="/images/TargetIcon.svg"
            width={100}
            height={100}
            alt="App Integration"
          />
          <span className="text-7xl text-black font-bold">10B</span>
          <p className="my-4">Connections (clicks & scans monthly)</p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
