"use client";
import React, { FC, useState } from "react";
import { Button, Modal } from "antd";
import { ShareAltOutlined } from "@ant-design/icons";

const ShareLinkModal: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        onClick={showModal}
        icon={<ShareAltOutlined />}
        iconPosition="start"
        type="default"
        className=" font-medium"
      >
        Share
      </Button>
      <Modal
        footer={null}
        title={<span className="text-blue-500 font-bold">Select Platform</span>}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <p>Share</p>
          <div className="flex justify-end items-end">
            <Button type="primary">
              Share
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ShareLinkModal;
