import {
  BarChartOutlined,
  CalendarOutlined,
  CopyOutlined,
  EditOutlined,
  FileOutlined,
  GlobalOutlined,
  LockOutlined,
  MoreOutlined,
  QrcodeOutlined,
  TagOutlined,
} from "@ant-design/icons";
import { Avatar, Button } from "antd";
import Link from "next/link";
import React, { FC } from "react";
import ShareLinkModal from "../modals/ShareLinkModal";
import moment from "moment";

interface CardProps {
  title: string;
  short_code: string;
  long_url: string;
  createdAt:string
}

const UrlCard: FC<CardProps> = ({ title, short_code, long_url,createdAt }) => {
  return (
    <div className="flex justify-between bg-white border border-gray-200 p-4">
      <div className="flex justify-between gap-x-4">
        <div>
          <Avatar icon={<GlobalOutlined />} />
        </div>
        <div className="flex flex-col justify-between items-start">
          <div className="capitalize font-bold">
            <Link
              href={long_url}
              target="_blank"
              className="!text-black hover:!underline !text-xl"
            >
              {title}
            </Link>
          </div>
          <div className="font-bold">
            <Link href={long_url} target="_blank" className="hover:!underline">
              btit.ly/{short_code}
            </Link>
          </div>
          <div>
            <Link
              href={long_url}
              target="_blank"
              className="!text-black hover:!underline"
            >
              {long_url}
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
              <CalendarOutlined /> {moment(createdAt).format('ll')}
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
          <ShareLinkModal />
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

export default UrlCard;
