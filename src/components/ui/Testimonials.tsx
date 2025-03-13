import React, { FC } from "react";
import EmblaCarousel from "./EmblaCarousel";
import Image from "next/image";

const FirstSlide = (
  <div className="border bg-white rounded-2xl py-10 px-4">
    <div className="text-sm">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <div className="mt-8 flex justify-center items-center gap-x-2">
        <div className="w-14 h-14 border-2 border-amber-700 rounded-full flex justify-center items-center">
          <Image
            src="/images/phill-gergen.png"
            className="rounded-full"
            width={80}
            height={80}
            alt="pill"
          />
        </div>
        <div>
          <h4 className="font-bold">Phil Gergen</h4>
          <p>Chief Information Officer at Koozie Group</p>
        </div>
      </div>
    </div>
  </div>
);

const SecondSlide = (
  <div className="border bg-white rounded-2xl  py-10 px-4">
    <div className="text-sm">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <div className="mt-8 flex justify-center items-center gap-x-2">
        <div className="w-14 h-14 border-2 border-amber-700 rounded-full flex justify-center items-center">
          <Image
            src="/images/melody-park.png"
            className="rounded-full"
            width={80}
            height={80}
            alt="pill"
          />
        </div>
        <div>
          <h4 className="font-bold">Melody Park</h4>
          <p>Marketing Lead at Smalls</p>
        </div>
      </div>
    </div>
  </div>
);

const ThirdSlide = (
  <div className="border bg-white rounded-2xl  py-10 px-4">
    <div className="text-sm">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <div className="mt-8 flex justify-center items-center gap-x-2">
        <div className="w-14 h-14 border-2 border-amber-700 rounded-full flex justify-center items-center">
          <Image
            src="/images/melody-park.png"
            className="rounded-full"
            width={80}
            height={80}
            alt="pill"
          />
        </div>
        <div>
          <h4 className="font-bold">Melody Park</h4>
          <p>Marketing Lead at Smalls</p>
        </div>
      </div>
    </div>
  </div>
);

const FourthSlide = (
  <div className="border bg-white rounded-2xl  py-10 px-4">
    <div className="text-sm">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <div className="mt-8 flex justify-center items-center gap-x-2">
        <div className="w-14 h-14 border-2 border-amber-700 rounded-full flex justify-center items-center">
          <Image
            src="/images/melody-park.png"
            className="rounded-full"
            width={80}
            height={80}
            alt="pill"
          />
        </div>
        <div>
          <h4 className="font-bold">Melody Park</h4>
          <p>Marketing Lead at Smalls</p>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials: FC = () => {
  return (
    <section className="bg-[#f36600]  my-20 py-10">
      <h1 className="text-center text-6xl font-bold my-10">
        What our customers are saying
      </h1>
      <EmblaCarousel
        slides={[FirstSlide, SecondSlide, ThirdSlide, FourthSlide]}
      />
    </section>
  );
};

export default Testimonials;
