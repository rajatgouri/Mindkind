import { useSession } from "next-auth/react";
import { trpc } from "src/utils/trpc";

import PageContainer from "src/components/containers/PageContainer";
import Stripe from "stripe";
import Link from "next/link";

import { MdArrowForwardIos } from "react-icons/md";

function BreadCrumb() {
  return (
    <nav
      className="-mb-20 mt-10 flex items-center align-middle"
      aria-label="Breadcrumb"
    >
      <Link href="/account" className="text-2xl text-gray-800 underline">
        Account
      </Link>
      <MdArrowForwardIos
        className="mt-1 text-4xl font-bold lg:ml-20"
        aria-hidden="true"
      />
    </nav>
  );
}

export default function create() {
  const { data: sessionData } = useSession();
  return (
    <PageContainer>
      <BreadCrumb />
      <form>
        <div className="m-auto max-w-lg">
          <div className="mt-8 flex items-center justify-between">
            <h1 className="text-xl font-semibold">Create a business account</h1>
          </div>
          <div className="mt-4">
            <div className="mt-4 flex justify-between">
              <p className="text-xl font-semibold">Business Name</p>
              <p>Requried</p>
            </div>
            <input
              type="text"
              required
              className="mt-2 rounded-lg border-0 shadow-md"
            />
            <p className="mt-2 text-gray-500">
              This is the name that customers will see.
            </p>
            <div className="mt-4 h-0.5 w-full bg-gray-500"></div>
          </div>
          <div className="mt-4">
            <div className="mt-4 flex justify-between">
              <p className="text-xl font-semibold">Website</p>
              <p>Requried</p>
            </div>
            <input
              type="text"
              required
              className="mt-2 rounded-lg border-0 shadow-md"
            />
            <p className="mt-2 text-gray-500">
              Customers will have direct access to your website.
            </p>
            <div className="mt-4 h-0.5 w-full bg-gray-500"></div>
          </div>
          <div className="mt-4">
            <div className="mt-4 flex justify-between">
              <p className="text-xl font-semibold">Email address</p>
              <p>Requried</p>
            </div>
            <input
              type="email"
              required
              className="mt-2 rounded-lg border-0 shadow-md"
            />
            <p className="mt-2 text-gray-500">
              We will email general information about your business.This email
              address won't be shared with customers.
            </p>
            <div className="mt-4 h-0.5 w-full bg-gray-500"></div>
          </div>
          <div className="mt-4">
            <div className="mt-4 flex justify-between">
              <p className="text-xl font-semibold">Stripe account</p>
              <p>Requried</p>
            </div>
            
              <Link
                className="mt-2 rounded-md bg-black p-2 text-white"
                href="/api/stripe/onboard"
              >
                Connect
              </Link>

          </div>
          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              className="brand-color mt-2 w-40 rounded-md p-2 text-white"
            >
              Create
            </button>
          </div>
        </div>
      </form>
    </PageContainer>
  );
}
