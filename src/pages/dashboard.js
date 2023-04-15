import HeaderDashboard from "@/components/dashboard/Header";
import Layout from "@/components/layout/Layout";
import BreadCrumb from "@/components/shared/BreadCrumb";
import { BsPeopleFill } from "react-icons/bs";
import { RiFolderReceivedFill } from "react-icons/ri";
import { BsFillFilePostFill } from "react-icons/bs";
import { VscFolderActive } from "react-icons/vsc";
import { BsFillClipboard2CheckFill } from "react-icons/bs";
import { FaPeopleArrows } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import React from "react";

const Dashboard = () => {
  return (
    <Layout>
      <div className="mx-auto mt-[74px] grid h-full min-h-screen w-full max-w-screen-2xl grid-cols-12 gap-6">
        <HeaderDashboard />
        <div className="col-span-9 mt-8">
          <BreadCrumb />
          <div className="mt-4 flex flex-wrap gap-5">
            <div className="flex flex-col items-center rounded-md bg-[#72299e] p-10 text-white">
              <div className="flex items-center gap-1">
                <BsPeopleFill />
                <h5>User</h5>
              </div>
              <p className="my-1 text-4xl font-bold">24</p>
              <div>Applicant accounts(s)</div>
            </div>
            <div className="flex flex-col items-center rounded-md bg-[#00add6] p-10 text-white">
              <div className="flex items-center gap-1">
                <RiFolderReceivedFill />
                <h5>Received Application</h5>
              </div>
              <p className="text-4xl font-bold">24</p>
              <div>Applicant form(s)</div>
            </div>
            <div className="flex flex-col items-center rounded-md bg-[#ff624d] p-10 text-white">
              <div className="flex items-center gap-1">
                <BsFillFilePostFill />
                <h5>Job Vacation</h5>
              </div>
              <p className="text-4xl font-bold">0</p>
              <div>Vacant Jobs(s)</div>
            </div>
            <div className="flex flex-col items-center rounded-md bg-[#00aba9] p-10 text-white">
              <div className="flex items-center gap-1">
                <VscFolderActive />
                <h5>Active Job Post(s)</h5>
              </div>
              <p className="text-4xl font-bold">24</p>
              <div>Job Posts</div>
            </div>
            <div className="flex flex-col items-center rounded-md bg-[#ffbe27] p-10 text-white">
              <div className="flex items-center gap-1">
                <BsFillClipboard2CheckFill />
                <h5>Qualified Candidate</h5>
              </div>
              <p className="text-4xl font-bold">12</p>
              <div>Candidate</div>
            </div>
            <div className="flex flex-col items-center rounded-md bg-[#ff7a41] p-10 text-white">
              <div className="flex items-center gap-1">
                <FaPeopleArrows />
                <h5>No. of Qualified Applicants(s)</h5>
              </div>
              <p className="text-4xl font-bold">9</p>
              <div>F to F Interview</div>
            </div>
            <div className="flex flex-col items-center rounded-md bg-[#38a2fb] p-10 text-white">
              <div className="flex items-center gap-1">
                <AiFillLike />
                <h5>No. of hired Applications</h5>
              </div>
              <p className="text-4xl font-bold">3</p>
              <div>New Hired(s)</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
