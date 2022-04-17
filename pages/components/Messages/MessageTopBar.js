import React from "react";
import { Icon } from "@iconify/react";
import { IconWithDescription } from "../../components";
import { useRouter } from "next/dist/client/router";

function MessageTopBar() {
  const router = useRouter();
  return (
    <div className="fixed top-0 right-0 w-[90%]">
      <div className="h-24 bg-messages-gray w-full flex items-center justify-between">
        <div className="flex ml-10 items-center gap-4">
          <Icon
            onClick={() => router.back()}
            height={30}
            width={30}
            color="#3C8BE0"
            icon="eva:arrow-ios-back-fill"
          />
          <IconWithDescription
            title="Martha C."
            subtitle="Mentor"
            icon={<div className="h-12 w-12 rounded-full bg-[#00BA34]" />}
          />
        </div>
        <div className="flex gap-4 mr-10">
          <Icon height={26} width={26} color="#3C8BE0" icon="bxs:video" />
          <Icon height={26} width={26} color="#3C8BE0" icon="fluent:call-24-filled" />
        </div>
      </div>
    </div>
  );
}

export default MessageTopBar;
