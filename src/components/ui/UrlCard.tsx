import {
  BarChartOutlined,
  CalendarOutlined,
  CopyOutlined,
  FileOutlined,
  GlobalOutlined,
  LockOutlined,
  QrcodeOutlined,
  TagOutlined,
} from "@ant-design/icons";
import { Avatar, Button } from "antd";
import Link from "next/link";
import React, { FC } from "react";
import ShareLinkModal from "../modals/ShareLinkModal";
import moment from "moment";
import { useClipboard } from "@/lib/hooks";
import UpdateLinkModal from "../modals/UpdateLinkModal";
import DeleteLinkModal from "../modals/deleteModal";

interface CardProps {
  title: string;
  short_code: string;
  long_url: string;
  createdAt: string;
}

const UrlCard: FC<CardProps> = ({ title, short_code, long_url, createdAt }) => {
  const { copied, copyText } = useClipboard(short_code);

  return (
    <div className="flex flex-col gap-y-4 lg:flex-row justify-between bg-white border border-gray-200 p-4  overflow-x-scroll sm:overflow-hidden">
      <div className="flex flex-col md:flex-row justify-start gap-x-4">
        <div>
          <Avatar icon={<GlobalOutlined />} />
        </div>
        <div className="flex flex-col justify-between items-start">
          <div className="capitalize font-bold">
            <Link
              href={`/dashboard/analytics/${short_code}`}
              className="!text-black hover:!underline !text-xl"
            >
              {title}
            </Link>
          </div>
          <div className="font-bold ">
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
          <div className="mt-4  flex justify-between items-center gap-x-2">
            <div>
              <Link href={`/dashboard/analytics/${short_code}`}>
                <BarChartOutlined />
              </Link>
            </div>
            <div>
              <LockOutlined />
               Click data
            </div>
            <div>
              <CalendarOutlined /> {moment(createdAt).format("ll")}
            </div>
            <div>
              <TagOutlined /> No tags
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-start lg:justify-between items-center gap-x-1 lg:gap-x-4">
          <Button
            icon={<CopyOutlined />}
            iconPosition="start"
            onClick={copyText}
          >
            {copied ? "Copied!" : "Copy"}
          </Button>
          <ShareLinkModal />
          <UpdateLinkModal long_url={long_url} shortCode={short_code}/>
          <DeleteLinkModal shortCode={short_code}/>
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
