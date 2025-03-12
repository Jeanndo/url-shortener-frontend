"use client";
import React, { FC } from "react";
import {
  legacyLogicalPropertiesTransformer,
  StyleProvider,
} from "@ant-design/cssinjs";
import { Layout, theme } from "antd";
import AppProvider from "@/context/providers/AppProvider";
import LayoutHeader from "@/components/layout/Header";
import LayoutSideBar from "@/components/layout/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const { Content, Footer } = Layout;

const PassengerLayout: FC<LayoutProps> = ({ children }) => {
  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <StyleProvider transformers={[legacyLogicalPropertiesTransformer]}>
        <AppProvider>
          <Layout className="w-full">
            <LayoutHeader />
            <Layout>
              <LayoutSideBar />
              <Content
                className="h-screen overflow-hidden overflow-y-scroll my-24 mx-0 sm:mx-24  p-4"
                style={{
                  borderRadius: borderRadiusLG,
                }}
              >
                {children}
              </Content>
            </Layout>
            <Footer className="text-center uppercase !text-blue-500 !font-bold">
              Link shortener
            </Footer>
          </Layout>
        </AppProvider>
      </StyleProvider>
    </>
  );
};

export default PassengerLayout;
