"use client";
import React, { FC } from "react";
import { Button, Modal } from "antd";
import { BarChartOutlined, CopyOutlined } from "@ant-design/icons";
type ModalProps = {
  shortUrl: string;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CopyLinkModal: FC<ModalProps> = ({
  shortUrl,
  isModalOpen,
  setIsModalOpen,
}) => {

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        footer={null}
        title={
          <span className="text-black font-bold">Your link is ready 🥳</span>
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <p className="my-5">
            Copy the link below to share it or choose a platform to share it to.
          </p>
          <div className="flex flex-col justify-center items-center bg-blue-50 p-2">
            <p className="font-bold text-blue-500 mb-4 text-xl">b.tly/{shortUrl}</p>
            
            <div className="flex justify-center items-center gap-x-4 ">
            <Button
                className="!text-blue-500 !ring-blue-500"
            icon={<BarChartOutlined/>}
              type="default"
            >
              View link details
            </Button>
            <Button
              icon={<CopyOutlined/>}
              iconPosition="start"
              type="primary"
            >
              Copy Link
            </Button>
            </div>
           
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CopyLinkModal;
