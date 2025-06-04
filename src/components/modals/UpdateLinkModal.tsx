"use client";
import React, { FC, useState } from "react";
import { Button, Form, Input, Modal } from "antd";
import { EditOutlined} from "@ant-design/icons";
import { usePrivateAxios } from "@/lib/hooks";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

interface ModalProps {
    long_url:string;
    shortCode:string;
}

const UpdateLinkModal: FC<ModalProps> = ({long_url,shortCode}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  

  const privateInstance = usePrivateAxios()

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
      mutationFn: async ({ long_url }: { long_url: string }) => {
        setLoading(true);
  
        const response = await privateInstance.patch(`/urls/${shortCode}`, { long_url });
        return response.data;
      },
  
      onSuccess: (data) => {
        setLoading(false);
        toast.success(data.message);
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

  const onFinish = (values:{long_url:string})=>{
    mutation.mutate({long_url:values.long_url})
  }

  return (
    <>
      <Button
        onClick={showModal}
        type="default"
        className=" font-medium"
      >
        <EditOutlined />
      </Button>
      <Modal
        footer={null}
        title={<span className="text-blue-500 font-bold">Update  Destination</span>}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form 
           layout="vertical"
           onFinish={onFinish}
           initialValues={{long_url}}
           >
           <Form.Item
            label="Destination"
            name="long_url"
           >
              <Input type="text" placeholder="Enter destination url"/>
           </Form.Item>
           <Form.Item>
              <Button 
                type="primary"
                 htmlType="submit"
                 loading={loading}
                >
                 Update
            </Button>
           </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default UpdateLinkModal;
