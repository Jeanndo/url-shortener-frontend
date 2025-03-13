import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <nav className="flex justify-around h-20 bg-[#031f39] items-center">
      <div>
        <span className="text-4xl font-bold text-orange-500">bitly</span>
      </div>
      <div className="hidden sm:block">
        <ul className="flex justify-center items-center gap-x-4">
          <li className="text-white font-bold">
            <span>Platiform</span>
          </li>
          <li className="text-white font-bold">
            <span>Solutions</span>
          </li>
          <li className="text-white font-bold">
            <span>Pricing</span>
          </li>
          <li className="text-white font-bold">
            <span>Resources</span>
          </li>
        </ul>
      </div>
      <div className="hidden sm:block">
        <ul className="flex justify-center items-center gap-x-4">
          <li className="text-white">En</li>
          <li>
            <Link href="/login" className="text-white">
              Login
            </Link>
          </li>
          <li>
            <Link
              href="/quote"
              className="border-2 border-white p-2 text-white rounded-md"
            >
              Get a Quote
            </Link>
          </li>
          <li>
            <Link
              href="/register"
              className="border-2 bg-white p-2 rounded-md text-black"
            >
              Sign up Free
            </Link>
          </li>
        </ul>
      </div>
      <div className="block sm:hidden">
        <MenuOutlined/>
      </div>
    </nav>
  );
};

export default Navigation;
