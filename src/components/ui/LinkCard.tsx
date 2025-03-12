import { BarChartOutlined, CalendarOutlined, CopyOutlined, EditOutlined, FileOutlined, GlobalOutlined, LockOutlined, MoreOutlined, QrcodeOutlined,TagOutlined } from "@ant-design/icons";
import { Avatar, Button } from "antd";
import Link from "next/link";
import React from "react";
import ShareLinkModal from "../modals/ShareLinkModal";

const LinkCard = () => {
  return (
    <div className="flex justify-between bg-white border border-gray-200 p-4">
      <div className="flex justify-between gap-x-4">
        <div>
          <Avatar icon={<GlobalOutlined />} />
        </div>
        <div className="flex flex-col justify-between items-start">
          <div className="capitalize font-bold">
            <Link href="/" className="!text-black hover:!underline !text-xl">
              Title
            </Link>
          </div>
          <div className="capitalize font-bold">
            <Link href="/" className="">
              Short Link
            </Link>
          </div>
          <div>
            <Link href="/" className="!text-black">
              Original Link
            </Link>
          </div>
          <div className="mt-4 flex justify-between items-center gap-x-4">
            <div>
              <BarChartOutlined />
            </div>
            <div>
              <LockOutlined /> Click data
            </div>
            <div>
              <CalendarOutlined /> Mar 12,2025
            </div>
            <div>
              <TagOutlined /> No tags
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center gap-x-4">
          <Button icon={<CopyOutlined />} iconPosition="start">
            Copy
          </Button>
          <ShareLinkModal/>
          <Button>
            <EditOutlined />
          </Button>
          <Button type="default">
            <MoreOutlined />
          </Button>
        </div>
        <div className="flex justify-center items-center gap-x-4 mt-10">
          <QrcodeOutlined className="cursor-pointer" />
          <FileOutlined className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default LinkCard;
