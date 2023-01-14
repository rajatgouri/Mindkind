import { useSession } from "next-auth/react";

import PageContainer from "src/components/containers/PageContainer";
import Image from "next/image";
import Link from "next/link";

import {MdArrowForwardIos} from 'react-icons/md'

function BreadCrumb() {
  return (
    <nav className="flex items-center align-middle -mb-20 mt-10" aria-label="Breadcrumb">
      <Link href="/account" className="text-gray-800 text-2xl underline">Account</Link>
      <MdArrowForwardIos className="mt-1 ml-20 text-4xl font-bold" aria-hidden="true" />
    </nav>
  );
}

export default function profile() {
  const { data: sessionData } = useSession();
  return (
    <PageContainer>
      <BreadCrumb />
      <div className="m-auto max-w-lg">
        <div className="mt-8 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Personal Information</h1>
          {sessionData?.user?.image && (
            <Image
              src={sessionData?.user?.image}
              alt="user image"
              className="h-20 w-20 rounded-full border-2 border-black object-cover object-center"
              width={200}
              height={200}
            />
          )}
        </div>
        <div className="mt-4">
          <div className="mt-4 flex justify-between">
            <p className="text-xl font-semibold">Legal Name</p>
            <a className="text-gray-800 underline">Update</a>
          </div>
          <input
            type="text"
            value={sessionData?.user?.name || ""}
            disabled
            className="border-0 bg-inherit pl-0 text-lg text-gray-500"
          />
          <div className="mt-4 h-0.5 w-full bg-gray-500"></div>
        </div>
        <div className="mt-4">
          <div className="mt-8 flex justify-between">
            <p className="text-xl font-semibold">Email address</p>
            <a className="text-gray-800 underline">Update</a>
          </div>
          <input
            type="text"
            value={sessionData?.user?.email || ""}
            disabled
            className="border-0 bg-inherit pl-0 text-lg text-gray-500"
          />
          <div className="mt-4 h-0.5 w-full bg-gray-500"></div>
        </div>
        <div className="mt-4">
          <div className="mt-8 flex justify-between">
            <p className="text-xl font-semibold">Phone number</p>
            <a className="text-gray-800 underline">Update</a>
          </div>
          <input
            type="text"
            value="+44 444 44 444"
            disabled
            className="border-0 bg-inherit pl-0 text-lg text-gray-500"
          />
          <div className="mt-4 h-0.5 w-full bg-gray-500"></div>
        </div>
        <div className="mt-4">
          <div className="mt-8 flex justify-between">
            <p className="text-xl font-semibold">Username</p>
            <a className="text-gray-800 underline">Update</a>
          </div>
          <input
            type="text"
            value="josephay"
            disabled
            className="border-0 bg-inherit pl-0 text-lg text-gray-500"
          />
          <div className="mt-4 h-0.5 w-full bg-gray-500"></div>
        </div>
        <div className="mt-4">
          <div className="mt-8 flex justify-between">
            <p className="text-xl font-semibold">Password</p>
            <a className="text-gray-800 underline">Update</a>
          </div>
          <input
            type="password"
            value="+44 444 44 444"
            disabled
            className="border-0 bg-inherit pl-0 text-lg text-gray-500"
          />
        </div>
      </div>
    </PageContainer>
  );
}
