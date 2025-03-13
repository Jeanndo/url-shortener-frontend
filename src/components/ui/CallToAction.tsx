import { ArrowRightOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Image from "next/image";
import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto my-auto">
        <h4 className="text-gray-400 uppercase text-center mb-4">
          Great Connections Start with a click OR SCAN
        </h4>
        <h1 className="font-bold text-black text-center text-4xl mb-4">
          The Bitly Connections Platform
        </h1>
        <p className="text-center font-medium">
          All the products you need to build brand connections, manage links and
          QR Codes, and connect with audiences everywhere, in a single unified
          platform.
        </p>

        <div className="flex justify-center items-center gap-x-4 mt-10">
          <Button
            type="primary"
            icon={<ArrowRightOutlined />}
            iconPosition="end"
            className="!py-6 !px-5 !font-bold !rounded-2xl"
          >
            Get started for free
          </Button>
          <Button
            type="default"
            className="!border-2 !border-blue-500 !py-6 !px-5 !text-blue-500 !font-bold !rounded-2xl"
            icon={<ArrowRightOutlined />}
            iconPosition="end"
          >
            Get a quote
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-10 max-w-5xl mx-auto my-auto">
        <div className="h-96 relative overflow-hidden border rounded-2xl shadow-lg group">
          <div className="w-full h-full bg-gray-200 p-4 flex items-center justify-center">
            <div>
              <Image
                src="/images/service1.png"
                width={500}
                height={500}
                alt="shortener"
              />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-50 border rounded-2xl transition-all duration-300 group-hover:h-[95%] h-[20%] px-4">
            <h1 className="font-bold">URL Shortener</h1>
            <p>
              A comprehensive solution to help make every point of connection
              between your content and your audience more powerful.
            </p>

            <div>
              <h4 className="font-bold py-4 h-10">
                Popular URL Shortening Features
              </h4>
              <ul className="flex flex-col justify-start items-start gap-x-4">
                <li>
                  <CheckCircleOutlined className="!text-orange-500 !text-xl mr-2" />
                  <span className="text-black text-sm">URL shortening at scale</span>
                </li>
                <li>
                  <CheckCircleOutlined className="!text-orange-500 !text-xl mr-2" />{" "}
                  <span className="text-black text-sm">
                    AI-generated custom domains
                  </span>
                </li>
                <li>
                  <CheckCircleOutlined className="!text-orange-500 !text-xl mr-2" />
                  <span className="text-black text-sm">URL redirects</span>
                </li>
                <li>
                  <CheckCircleOutlined className="!text-orange-500 !text-xl mr-2" />
                  <span className="text-black text-sm">
                    Advanced analytics & tracking
                  </span>
                </li>
              </ul>

              <div className="flex flex-col !mt-8 gap-y-4">
                <Button type="primary" className="!h-10 !rounded-2xl">
                  Get started for free
                </Button>
                <Button type="primary" className="!h-10 !rounded-2xl">Learn More</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-96 relative overflow-hidden border rounded-2xl shadow-lg group">
          <div className="w-full h-full bg-gray-200 p-4 flex items-center justify-center">
            <div>
              <Image
                src="/images/service2.png"
                width={500}
                height={500}
                alt="shortener"
              />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-50 border rounded-2xl transition-all duration-300 group-hover:h-[95%] h-[20%] px-4 ">
            <h1 className="font-bold">QR Codes.</h1>
            <p>
              QR Code solutions for every customer, business and brand
              experience.
            </p>

            <div>
              <h4 className="font-bold py-4 h-10">Popular QR Code Features</h4>
              <ul className="flex flex-col justify-start items-start gap-x-4">
                <li>
                  <CheckCircleOutlined className="!text-orange-500 !text-xl mr-2" />
                  <span className="text-black text-sm">
                    Fully customizable QR Codes
                  </span>
                </li>
                <li>
                  <CheckCircleOutlined className="!text-orange-500 !text-xl mr-2" />{" "}
                  <span className="text-black text-sm">Dynamic QR Codes</span>
                </li>
                <li>
                  <CheckCircleOutlined className="!text-orange-500 !text-xl mr-2" />
                  <span className="text-black text-sm">
                    QR Code types & destination options
                  </span>
                </li>
                <li>
                  <CheckCircleOutlined className="!text-orange-500 !text-xl mr-2" />
                  <span className="text-black text-sm">
                    Advanced analytics & tracking
                  </span>
                </li>
              </ul>

              <div className="flex flex-col !mt-8 gap-y-4">
                <Button type="primary" className="!h-10 !rounded-2xl">
                  Get started for free
                </Button>
                <Button type="primary" className="!h-10 !rounded-2xl">Learn More</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-96 relative overflow-hidden rounded-2xl border shadow-lg group">
          <div className="w-full h-full bg-gray-200 p-4 flex items-center justify-center">
            <div>
              <Image
                src="/images/service3.png"
                width={500}
                height={500}
                alt="shortener"
              />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-50 border rounded-2xl transition-all duration-300 group-hover:h-[95%] h-[20%] px-4 ">
            <h1 className="font-bold">Landing Pages</h1>
            <p>
              Bitly Pages helps you create engaging, mobile-optimized landing
              pages in minutes.
            </p>

            <div>
              <h4 className="font-bold py-4 h-10">
                Popular Landing Page Features
              </h4>
              <ul className="flex flex-col justify-start items-start gap-x-4">
                <li>
                  <CheckCircleOutlined className="!text-orange-500 !text-xl mr-2" />
                  <span className="text-black text-sm">
                    Custom URLs for social media
                  </span>
                </li>
                <li>
                  <CheckCircleOutlined className="!text-orange-500 !text-xl mr-2" />{" "}
                  <span className="text-black text-sm">Customizable landing page</span>
                </li>
                <li>
                  <CheckCircleOutlined className="!text-orange-500 !text-xl mr-2" />
                  <span className="text-black text-sm">Easy-to-manage links</span>
                </li>
                <li>
                  <CheckCircleOutlined className="!text-orange-500 !text-xl mr-2" />
                  <span className="text-black text-sm">
                    Link and landing page tracking
                  </span>
                </li>
              </ul>

              <div className="flex flex-col !mt-8 gap-y-4">
                <Button type="primary" className="!h-10 !rounded-2xl">
                  Get started for free
                </Button>
                <Button type="primary" className="!h-10 !rounded-2xl">Learn More</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
