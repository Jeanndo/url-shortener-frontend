"use client";
import React, { Fragment } from "react";
import { Input, Space, Button, Dropdown } from "antd";
import {
  CalendarOutlined,
  FilterOutlined,
  LockOutlined,
  SearchOutlined,
  DownOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import instance from "../../../../axio.config";
import UrlCard from "@/components/ui/UrlCard";
import { useGetCsrufToken } from "@/lib/hooks";

const items: MenuProps["items"] = [
  {
    label: <Link href="/dashboard/links">Active</Link>,
    key: "0",
  },
  {
    label: (
      <Link href="/dashboard/links" target="_blank" rel="noopener noreferrer">
        Hidden
      </Link>
    ),
    key: "1",
  },
];

interface UrlDataType {
  id: string;
  user_id: string;
  title:string;
  short_code: string;
  long_url: string;
  clicks: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}



const Links = () => {
  const {csrfToken} = useGetCsrufToken()

  const fetchUrls = async () => {
    const { data } = await instance.get("/urls",{
      headers:{
        "x-csrf-token": csrfToken.csrfToken,
      }
    });
    return data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["urls"],
    queryFn: fetchUrls,
  });



  return (
    <Fragment>
      <div className="max-w-5xl mx-auto my-auto">
        <div className="flex justify-between mb-10">
          <div>
            <h2 className="text-black text-3xl font-bold mb-3"> Bitly Links</h2>
            <Space direction="horizontal">
              <Input
                size="large"
                placeholder="search url"
                prefix={<SearchOutlined />}
              />
              <Button
                icon={<CalendarOutlined />}
                iconPosition="start"
                type="default"
                size="large"
              >
                Filter by created date
              </Button>
              <Button
                icon={<FilterOutlined />}
                iconPosition="start"
                type="default"
                size="large"
              >
                Add Filters
              </Button>
            </Space>
          </div>
          <div>
            <Link href="/dashboard/links/create" className="!bg-blue-500 py-2 px-4 !text-white">Create Link</Link>
          </div>
        </div>

        {error ? (
          <p className="text-xl text-red-500 text-center">{error.message}</p>
        ) : (
          <div>
            <div className="flex justify-between mb-4">
              <div className="flex justify-between items-center gap-x-2">
                <div>0 selcted</div>
                <div>
                  <LockOutlined /> Export
                </div>
                <div>Hide</div>
                <div>Tag</div>
              </div>
              <div>
                <Dropdown menu={{ items }} trigger={["click"]}>
                  <Button onClick={(e) => e.preventDefault()}>
                    <Space>
                      Show: Active
                      <DownOutlined />
                    </Space>
                  </Button>
                </Dropdown>
              </div>
            </div>
            {/* Link Card */}
            {isLoading ? (
              <div className="flex justify-center items-center">
                <SyncOutlined className="!text-4xl !text-blue-500" spin />
              </div>
            ) : (
              <div className="flex flex-col gap-y-4">
                {data.data.rows.map((item: UrlDataType) => (
                  <UrlCard
                    key={item.id}
                    title={item.title}
                    short_code={item.short_code}
                    long_url={item.long_url}
                    createdAt={item.createdAt}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Links;
