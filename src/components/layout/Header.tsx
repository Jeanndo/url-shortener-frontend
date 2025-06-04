"use client";
import { usePrivateAxios, useShortener } from "@/lib/hooks";
import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Button, Layout } from "antd";
import { useRouter } from "next/navigation";
import React, { FC, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const { Header } = Layout;

const LayoutHeader: FC = () => {
  const { collapsed, toggleMenu } = useShortener();
  const router = useRouter();
  const privateInstance = usePrivateAxios();

  const mutation = useMutation({
    mutationFn: async () => {
      const response = await privateInstance.post(`/users/auth/logout`);
      return response.data;
    },

    onSuccess: (data) => {
      toast.success(data.message);
      router.push("/login");
    },

    onError: (error: { response?: { data?: { message?: string } } }) => {
      toast.error(error.response?.data?.message || "some thing went wrong");
    },
  });

  const handleLogout = () => {
    localStorage.clear();
    mutation.mutate();
  };

  useEffect(() => {
    const authenticatedUser = localStorage.getItem("user");
    if (!authenticatedUser) {
      router.push("/login");
    }
  }, [router]);

  return (
    <Header className="!bg-white shadow-md !px-8  mx-0 w-full flex  justify-between items-center fixed top-0 z-50">
      <Button
        type="text"
        icon={
          collapsed ? (
            <MenuUnfoldOutlined className="!text-blue-500 !font-bold" />
          ) : (
            <MenuFoldOutlined className="!text-blue-500 !font-bold" />
          )
        }
        onClick={toggleMenu}
        style={{ fontSize: "16px" }}
      />
      <div className="flex justify-center items-center gap-x-8 ">
        <Button
          color="danger"
          variant="solid"
          icon={<LogoutOutlined />}
          size="small"
          onClick={handleLogout}
        >
          {" "}
          Logout
        </Button>
      </div>
    </Header>
  );
};

export default LayoutHeader;
