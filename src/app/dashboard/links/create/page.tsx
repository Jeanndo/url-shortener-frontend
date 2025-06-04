"use client";
import CopyLinkModal from "@/components/modals/CopyShortLinkModal";
import { FilePdfOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row } from "antd";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import {usePrivateAxios } from "@/lib/hooks";

const NewLink = () => {
  const [form] = Form.useForm();

  const privateInstance = usePrivateAxios()
  
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [shortUrl, setShortUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const mutation = useMutation({
    mutationFn: async ({ long_url,title }: { long_url: string,title:string }) => {
      setLoading(true);

      const response = await privateInstance.post(`/urls/shorten`, { long_url,title });
      return response.data;
    },

    onSuccess: (data) => {
      setLoading(false);
      toast.success(data.message);
      setShortUrl(data.data.short_code);
      setIsModalOpen(true);
    },

    onError: (error: { response?: { data?: { message?: string } } }) => {
      setLoading(false);
      setIsModalOpen(false);
      toast.error(
        error.response?.data?.message || "some thing went wrong"
      );
    },
  });

  const onFinish = (values: { long_url: string,title:string }) => {
    mutation.mutate({ long_url: values.long_url,title:values.title });
  };

  return (
    <Fragment>
      <div className="max-w-3xl mx-auto my-auto">
        <div className="flex justify-between mb-10">
          <div>
            <h2 className="text-black text-3xl font-bold mb-3">
              {" "}
              Create a link
            </h2>
            <p>
              You can create 4 more links this month.{" "}
              <Link href="/" className="!underline !text-black">
                Upgrade for more.
              </Link>
            </p>
          </div>
          <div>
            <Button icon={<FilePdfOutlined />} iconPosition="start">
              Bulk upload
            </Button>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white  p-2 border border-gray-200 rounded-md">
          <Form
            form={form}
            name="Register Driver Form"
            layout="vertical"
            onFinish={onFinish}
            initialValues={{
              long_url: "",
              title:""
            }}
          >
            <Row gutter={[16, 8]}>
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Destination"
                  name="long_url"
                  rules={[{ required: true, message: "Enter original url" }]}
                >
                  <Input placeholder="Enter original url" className="!h-10" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
              <Form.Item
                  label="Title"
                  name="title"
                  rules={[{ required: true, message: "Enter Title" }]}
                >
                  <Input placeholder="Enter Title" className="!h-10" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[16, 8]}>
              <Col xs={24}>
                <Form.Item>
                  <Button
                    type="primary"
                    className="!h-10 w-40 rounded-none !font-bold uppercase"
                    htmlType="submit"
                    loading={loading}
                  >
                    Shorten It
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
      <CopyLinkModal
        shortUrl={shortUrl}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </Fragment>
  );
};

export default NewLink;
