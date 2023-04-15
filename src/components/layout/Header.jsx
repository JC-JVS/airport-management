import React from "react";
import Button from "../shared/Button";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute left-0 z-50 h-[78px] w-full bg-gray-950 bg-gradient-to-b from-[#000000b3] to-[#00000000] transition-all md:h-[74px] 2xl:h-[78px]">
      <div className="mx-auto flex h-[78px] w-full max-w-screen-2xl items-center gap-2 px-6 md:h-[74px] 2xl:h-[78px]">
        <Link href="/" className="flex gap-2">
          <div className="relative h-12 w-20">
            <Image
              src="/logo.png"
              fill
              style={{ objectFit: "cover" }}
              alt="Skystream Enterprise"
            />
          </div>
          <div className="flex flex-col text-lg">
            <span className="text-white">SKY STREAM</span>
            <span className="-mt-1 text-white">ENTERPRISE</span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
