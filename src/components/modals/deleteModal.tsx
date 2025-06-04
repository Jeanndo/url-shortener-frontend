"use client";
import React, { FC, useState } from "react";
import { Button, Modal } from "antd";
import { DeleteOutlined} from "@ant-design/icons";
import { usePrivateAxios } from "@/lib/hooks";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

interface ModalProps {
  shortCode: string;
}

const DeleteLinkModal: FC<ModalProps> = ({ shortCode }) => {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const privateInstance = usePrivateAxios();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const mutation = useMutation({
    mutationFn: async () => {
      setLoading(true);

      const response = await privateInstance.delete(`/urls/${shortCode}`);
      return response.data;
    },

    onSuccess: (data) => {
      setLoading(false);
      toast.success(data.message);
      setIsModalOpen(false);
    },

    onError: (error: { response?: { data?: { message?: string } } }) => {
      setLoading(false);
      setIsModalOpen(false);
      toast.error(error.response?.data?.message || "some thing went wrong");
    },
  });

  const onDelete = () => {
    mutation.mutate();
  };

  return (
    <>
      <Button onClick={showModal} type="default" danger className=" font-medium">
        <DeleteOutlined />
      </Button>
      <Modal
        footer={null}
        title={<span className="text-blue-500 font-bold">Select Platform</span>}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p className="text-red-500">Do you want to delete this link?</p>
        <Button danger htmlType="submit" loading={loading} onClick={onDelete}>
          Delete
        </Button>
      </Modal>
    </>
  );
};

export default DeleteLinkModal;
