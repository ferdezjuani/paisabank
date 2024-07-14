import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import home from "@/assets/Home.svg";
import movements from "@/assets/Document.svg";
import logout from "@/assets/Logout.svg";
import LogoutModal from "./LogoutModal";

const BottomNavigation = () => {
  const [logoutModal, setLogoutModal] = useState(false);
  const router = useRouter();

  const isActive = (path: string) => router.pathname === path;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg shadow-black rounded-t-2xl">
        <div className="flex justify-around items-center h-20">
          <Link href="/">
            <div className="flex flex-col items-center">
              <Image
                src={home}
                alt="Home"
                width={24}
                height={24}
                className={isActive("/") ? "text-[#6C8FF8]" : "fill-current"}
              />
            </div>
          </Link>
          <Link href="/movements">
            <div className="flex flex-col items-center">
              <Image
                src={movements}
                alt="Movements"
                width={24}
                height={24}
                className={
                  isActive("/movements") ? "fill-[#6C8FF8]" : "fill-current"
                }
              />
            </div>
          </Link>
          <div
            className="flex flex-col items-center"
            onClick={() => setLogoutModal(true)}
          >
            <Image src={logout} alt="Logout" width={24} height={24} />
          </div>
        </div>
      </div>
      {logoutModal && <LogoutModal setLogoutModal={setLogoutModal} />}
    </>
  );
};

export default BottomNavigation;
