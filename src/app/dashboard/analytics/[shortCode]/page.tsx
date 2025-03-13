"use client";
import { Col, Row } from "antd";
import { useParams } from "next/navigation";
import React from "react";
import instance from "../../../../../axio.config";
import { useQuery } from "@tanstack/react-query";
import {
  ClockCircleOutlined,
  DesktopOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { toast } from "react-toastify";
import moment from "moment";
import Link from "next/link";
import { useGetCsrufToken } from "@/lib/hooks";


interface AnalyticsType {
  id: string;
  urlId: string;
  deviceType: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}
const LinkAnalytics = () => {
  const { shortCode } = useParams<{ shortCode: string }>();
   const {csrfToken} = useGetCsrufToken()
    

  const fetchUrls = async () => {
    const { data } = await instance.get(`/urls/analytics/${shortCode}`,{
      headers:{
        "x-csrf-token": csrfToken.csrfToken,
      }
    });
    return data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["analytics"],
    queryFn: fetchUrls,
  });

  if (error) {
    toast.error(error.message);
  }

  return (
    <div className="max-w-2xl mx-auto my-auto">
      <div className="flex  flex-wrap justify-around items-center gap-x-10 my-4">
        <div>
          <Link
            href="/dashboard/links"
            className="!bg-blue-500 !py-2 !px-4 !text-white"
          >
            Back to urls
          </Link>
        </div>
        <div>
          <Link
            href="/dashboard/links/create"
            className="!border !border-blue-500 !py-2 !px-4 !text-blue-500"
          >
            Shorten Url
          </Link>
        </div>
      </div>

      <div className="bg-white px-4 py-3 shadow-md border border-blue-500">
      <h1 className="text-center my-10 uppercase text-blue-500">Clicks and Device Usage</h1>
      {isLoading ? (
        <div className="flex justify-center items-center">
          <SyncOutlined className="!text-4xl !text-blue-500" spin />
        </div>
      ) : (
        <Row gutter={[16, 8]}>
          <Col xs={24}>
            <div className="flex flex-col justify-center items-center w-full gap-y-4">
              <div className="border border-gray-200 bg-white p-4 w-full text-2xl text-blue-500">
                Clicks: {data?.data?.clicks}
              </div>
            </div>
          </Col>
          <Col xs={24}>
            <div className="flex flex-col justify-center items-center w-full gap-y-4">
              {data?.data?.stats.map((item: AnalyticsType) => (
                <div
                  key={item.id}
                  className="border border-gray-200 bg-white p-4 w-full"
                >
                  <div>
                    <ClockCircleOutlined className="mr-4 text-xl !text-blue-500" />
                    <span className="text-xl">
                      {moment(item.createdAt).fromNow()}
                    </span>
                  </div>
                  <div>
                    <DesktopOutlined className="mr-4 text-xl !text-blue-500" />
                    <span>{item.deviceType}</span>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      )}
      </div>
    </div>
  );
};

export default LinkAnalytics;
