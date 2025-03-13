"use client";
import { ArrowRightOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { FC} from "react";

const Hero: FC = () => {
  const [form] = Form.useForm();
  const onFinish = (values: { long_url: string }) => {
    console.log("values", values);
  };

  return (
    <section className="bg-[#031f39] pt-20">
      <div className="py-20 bg-[url('/images/stars.svg')] bg-contain bg-no-repeat">
        <div className="flex flex-col justify-center items-center max-w-5xl mx-auto my-auto">
          <div>
            <h1 className="text-white font-bold text-4xl">
              Build stronger digital connections
            </h1>
          </div>
          <div className="mt-10">
            <p className="text-center text-white">
              Use our URL shortener, QR Codes, and landing pages to engage your
              audience and connect them to the right information. Build, edit,
              and track everything inside the Bitly Connections Platform.
            </p>
          </div>
        </div>
      </div>
      <div className="pb-4">
        <div className="flex justify-center items-center gap-x-4 my-10">
          <Link href="/login">
            <div className="flex justify-between items-center bg-white text-black rounded-md p-1">
              <Image
                src="/images/linkIcon.svg"
                width={50}
                height={50}
                alt="link icon"
              />
              <div>
                <span className="font-bold">Short link</span>
              </div>
            </div>
          </Link>
          <Link href="/login">
            <div className="flex justify-between items-center hover:bg-gray-200 hover:text-black  text-white rounded-md p-1">
              <Image
                src="/images/QrcodeIcon.svg"
                width={50}
                height={50}
                alt="link icon"
              />
              <div>
                <span className="font-bold">QR Code</span>
              </div>
            </div>
          </Link>
        </div>

        <div className="bg-white rounded-4xl p-8 flex flex-col just-start items-start gap-y-8 max-w-4xl mx-auto my-auto">
          <div>
            <h2 className="text-2xl font-bold">Shorten a long link</h2>
            <p className="mt-4">No credit card required.</p>
          </div>
          <div className="w-full">
            <h4 className="text-lg font-bold mb-2">
              Paste your long link here
            </h4>
            <Form
              form={form}
              name="Register Driver Form"
              layout="vertical"
              onFinish={onFinish}
              initialValues={{
                long_url: "",
              }}
            >
              <Row gutter={[16, 8]}>
                <Col xs={24}>
                  <Form.Item
                    name="long_url"
                    rules={[
                      {
                        required: true,
                        message:
                          'We will need a valid URL, like "super-long-link.com/shorten-it"',
                      },
                    ]}
                  >
                    <Input
                      className="!w-full !h-14 !rounded-2xl"
                      placeholder="https://example.com/my-long-url"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24}>
                  <Form.Item>
                    <Button
                      type="primary"
                      icon={<ArrowRightOutlined />}
                      iconPosition="end"
                      htmlType="submit"
                      className="!font-bold 
                      !py-5  !rounded-2xl"
                    >
                      Get your link for free
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center my-10">
          <p className="text-2xl text-white font-bold">
            Sign up for free. Your free plan includes:
          </p>
          <div className="mt-4 flex justify-between items-center">
            <ul className="flex justify-center items-center gap-x-4">
              <li>
                <CheckCircleOutlined className="!text-orange-500 !text-xl mr-2" />
                <span className="text-white">5 short links/month</span>
              </li>
              <li>
                <CheckCircleOutlined className="!text-orange-500 !text-xl mr-2" />{" "}
                <span className="text-white">3 custom back-halves/month</span>
              </li>
              <li>
                <CheckCircleOutlined className="!text-orange-500 !text-xl mr-2" />
                <span className="text-white">Unlimited link clicks</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
