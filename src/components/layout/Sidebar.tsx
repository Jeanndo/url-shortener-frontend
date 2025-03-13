"use client";
import {
  HomeOutlined,
  LinkOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";
import { useMediaQuery } from "react-responsive";
import { useShortener } from "@/lib/hooks";

const { Sider } = Layout;

const siderStyle: React.CSSProperties = {
  overflow: "auto",
  height: "100vh",
  position: "fixed",
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: "thin",
  scrollbarGutter: "stable",
  backgroundColor: "white",
  zIndex: 1000,
};

type MenuItems = {
  key: string;
  icon: ReactNode;
  label: ReactNode;
};

const LayoutSideBar = () => {
  const pathname = usePathname();
  const { collapsed } = useShortener();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const highlightSelectedItem = () => {
    switch (pathname) {
      case "/dashboard/links/create":
        return "1";
      case "/dashboard":
        return "2";
      case "/dashboard/links":
        return "3";
      default:
        return "1";
    }
  };
  return (
    <Sider
      trigger={null}
      style={siderStyle}
      collapsible
      collapsed={collapsed}
      collapsedWidth={isTabletOrMobile ? 0 : 80}
      className="mt-16"
    >
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={[highlightSelectedItem()]}
        items={PassengerMenu}
        className="h-full"
      />
    </Sider>
  );
};

const PassengerMenu: MenuItems[] = [
  {
    key: "1",
    icon: <PlusCircleOutlined />,
    label: (
      <Link href="/dashboard/links/create" className="text-white">
        Create
      </Link>
    ),
  },
  {
    key: "2",
    icon: <HomeOutlined />,
    label: (
      <Link href="/dashboard" className="text-white">
        Home
      </Link>
    ),
  },
  {
    key: "3",
    icon: <LinkOutlined />,
    label: (
      <Link href="/dashboard/links" className="text-white">
        Links
      </Link>
    ),
  },
];

export default LayoutSideBar;
