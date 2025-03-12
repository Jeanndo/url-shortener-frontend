import { ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
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
    </section>
  );
};

export default CallToAction;
