import React from "react";
import Layout from "../layout/Layout";
import Image from "next/image";
import { LINKS_DASHBOARD } from "@/lib/utils";
import Link from "next/link";

const HeaderDashboard = () => {
  return (
    <div className="col-span-3">
      <div className="sticky top-0">
        <div className="flex gap-4 bg-gray-950 p-6 py-8">
          <div className="relative ">
            <div className="relative h-11 w-11 rounded">
              <Image
                fill
                src="/photo.jpg"
                alt="user name"
                style={{ objectFit: "cover" }}
                className="rounded-full"
              />
            </div>
          </div>
          <div className="text-white">
            <h2>Jhune Carlo Joves</h2>
            <p>APPLICANT MANAGER</p>
          </div>
        </div>
        <div className="mt-4">
          {LINKS_DASHBOARD.map((link) => (
            <Link
              href="/"
              key={link.title}
              className="flex items-center gap-4 py-2 pl-6 text-gray-900 transition hover:bg-slate-100"
            >
              <link.icon className="h-8 w-8" />
              <span className="text-gray-900">{link.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderDashboard;
