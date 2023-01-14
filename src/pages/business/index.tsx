import { useSession } from "next-auth/react";
import { trpc } from "src/utils/trpc";

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
  const business = trpc.businesses.getByOwnerId.useQuery().data;
  if (!business) return <p>Create a business</p>;
  console.log(business);
  return (
    <PageContainer>
      <BreadCrumb />
      <div className="m-auto max-w-lg">
        <div className="mt-8 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Business Information</h1>
          {business?.image && (
            <Image
              src={business?.image}
              alt="user image"
              className="h-20 w-20 rounded-full border-2 border-black object-cover object-center"
              width={200}
              height={200}
            />
          )}
        </div>
        <div className="mt-4">
          <div className="mt-4 flex justify-between">
            <p className="text-xl font-semibold">Business Name</p>
            <a className="text-gray-800 underline">Update</a>
          </div>
          <input
            type="text"
            value={business?.name || ""}
            disabled
            className="border-0 bg-inherit pl-0 text-lg text-gray-500"
          />
          <div className="mt-4 h-0.5 w-full bg-gray-500"></div>
        </div>
        <div className="mt-4">
          <div className="mt-8 flex justify-between">
            <p className="text-xl font-semibold">About</p>
            <a className="text-gray-800 underline">Update</a>
          </div>
          <p
            className="border-0 bg-inherit pl-0 text-lg text-gray-500"
          >
            Our mission is to reintroduce traditional methods of preservation, namely lacto-fermentation, which transforms raw foods into delicacies using beneficial bacteria cultures. The resulting product promotes healthy gut flora, repairs damage due to chronic inflammation, and creates enzymes to ease digestion.

          </p>
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
            <p className="text-xl font-semibold">Stripe</p>
            <a className="text-gray-800 underline">Update</a>
          </div>
          <p
          className="border-0 bg-inherit pl-0 text-lg text-gray-500"
          >
            {business?.stripeConnected ? "Connected" : "Not connected"}
            </p>
        </div>
      </div>
    </PageContainer>
  );
}
