"use client";
import React, { Fragment } from "react";
import { Input, Space, Button, Dropdown } from "antd";
import {
  CalendarOutlined,
  FilterOutlined,
  LockOutlined,
  SearchOutlined,
  DownOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import Link from "next/link";
import LinkCard from "@/components/ui/LinkCard";

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

const Links = () => {
  return (
    <Fragment>
      <div className="max-w-5xl mx-auto my-auto">
        <div className="flex justify-between mb-10">
          <div>
            <h2 className="text-black text-3xl font-bold mb-3"> Super Links</h2>

            <Space direction="horizontal">
              <Input
                size="large"
                placeholder="large size"
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
            <Button type="primary">Create Link</Button>
          </div>
        </div>

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
          <div className="flex flex-col gap-y-4">
          {[1, 2, 3, 4].map((link) => (
            <LinkCard key={link} />
          ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Links;
