import type { Metadata } from "next";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import { Montserrat } from "next/font/google";
import { ToastContainer } from "react-toastify";
import QueryProvider from "@/components/QueryProvider/QueryProvider";
import { AuthProvider } from "@/context/providers/AuthProvider";

export const metadata: Metadata = {
  title: "Link shortener",
  description: "Generate short links",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  adjustFontFallback: false,
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <ConfigProvider
          theme={{
            token: {
              fontFamily: montserrat.style.fontFamily,
              borderRadius: 0,
            },
          }}
        >
          <AntdRegistry>
            <ToastContainer position="top-center" />
            <QueryProvider>
              <AuthProvider>{children}</AuthProvider>
            </QueryProvider>
          </AntdRegistry>
        </ConfigProvider>
      </body>
    </html>
  );
}
