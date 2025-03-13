"use client";
import { useShortener } from "@/lib/hooks";
import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Button, Layout } from "antd";
import { useRouter } from "next/navigation";
import React, { FC, useEffect } from "react";

const { Header } = Layout;

const LayoutHeader: FC = () => {
    
  const { collapsed, toggleMenu } = useShortener();
  const router = useRouter()

  const handleLogout = () =>{
    localStorage.clear()
    router.push("/login")

  }

  useEffect(()=>{
    const authenticatedUser = localStorage.getItem('user')
    if(!authenticatedUser){
      router.push("/login")
    }
  },[router])

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
