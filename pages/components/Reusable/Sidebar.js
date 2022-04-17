import React from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/dist/client/router";
import { Logo } from "../../../public/svg/index";

function Sidebar() {
  const router = useRouter();
  return (
    <div className=" col-span-1 flex flex-col text-center bg-primary-blue h-[100%]">
      <div className="pt-10 pb-12 flex justify-center">
        <Logo />
      </div>
      <div className="flex flex-col align-items flex-1 text-gray-500 space-y-2 cursor-pointer">
        <div
          className="flex flex-col items-center space-y-2 hover:bg-[#1971D0] py-4"
          onClick={() => router.push("/")}
        >
          <Icon icon="ant-design:home-outlined" height={30} width={30} color="white" />
          <p className="text-white">dashboard</p>
        </div>
        <div
          onClick={() => router.push("/careers")}
          className="flex flex-col items-center space-y-2 hover:bg-[#1971D0] py-4"
        >
          <Icon icon="ic:outline-business-center" color="white" height={30} width={30} />
          <p className="text-white">networking</p>
        </div>
        <div
          onClick={() => router.push("/findMentor")}
          className="flex flex-col items-center space-y-2 hover:bg-[#1971D0] py-4"
        >
          <Icon icon="cil:people" height={30} width={30} color="white" />
          <p className="text-white">find mentor</p>
        </div>
        {/* <div
          onClick={() => router.push("/messages")}
          className="flex items-center justify-center space-x-4 hover:bg-[#1971D0] p-3"
        >
          <Icon icon="bx:message-rounded" height={24} width={24} color="white" />
        </div> */}
      </div>
      <div className="flex items-center justify-center space-x-4 mb-5 text-gray-500 hover:bg-[#1971D0] p-3 cursor-pointer">
        <Icon icon="simple-line-icons:logout" height={24} width={24} color="white" />
      </div>
    </div>
  );
}

export default Sidebar;
