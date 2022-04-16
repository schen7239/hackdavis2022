import React from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/dist/client/router";

function Sidebar() {
  const router = useRouter();
  return (
    <div className="w-1/5 col-span-1 flex flex-col text-center bg-sidebar-gray">
      <h1 className="pt-10 text-3xl font-semibold pb-20 text-primary-blue">Elementee.</h1>
      <div className="flex flex-col align-items flex-1 text-gray-500">
        <div className="flex items-center space-x-4 hover:bg-hover-gray px-[25%] py-4">
          <Icon icon="ant-design:home-outlined" />
          <p>Discover</p>
        </div>
        <div
          onClick={() => router.push("/careers")}
          className="flex items-center space-x-4 hover:bg-hover-gray px-[25%] py-4"
        >
          <Icon icon="ic:outline-business-center" />
          <p>Careers</p>
        </div>
        <div className="flex items-center space-x-4 hover:bg-hover-gray px-[25%] py-4">
          <Icon icon="cil:people" />
          <p>Social Streams</p>
        </div>
      </div>
      <div className="px-[25%] flex items-center space-x-4 mb-5 text-gray-500 hover:bg-hover-gray py-4">
        <Icon icon="simple-line-icons:logout" />
        <p>Log Out</p>
      </div>
    </div>
  );
}

export default Sidebar;
