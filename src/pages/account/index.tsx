import { Fragment, useContext } from "react";
import PageContainer from "src/components/containers/PageContainer";
import BusinessSettings from "src/components/account/BusinessSettings";
import PersonalSettings from "src/components/account/PersonalSettings";

import type { AccountContextType } from "src/components/contexts/ToggleAccountContext";
import { AccountContext } from "src/components/contexts/ToggleAccountContext";

import {
  MdLoop,
  MdAddCircleOutline,
  MdPersonOutline,
  MdOutlineStoreMallDirectory,
} from "react-icons/md";

import Link from "next/link";

import { Popover, Transition } from "@headlessui/react";

import { useSession } from "next-auth/react";

import { trpc } from "src/utils/trpc";

function PopoverButton() {
  const { account, setAccount } =
    useContext<AccountContextType>(AccountContext);

  const { data: session } = useSession();

  const business = trpc.businesses.getByOwnerId.useQuery().data;

  console.log(business);

  return (
    <Popover className="relative">
      <>
        <Popover.Button className="brand-color-semi-transparent flex w-full max-w-md items-center justify-between rounded-md py-3 px-4 text-base font-semibold text-black">
          {account ? session?.user?.name : business?.name}
          <MdLoop className="ml-2 h-5 w-5 font-bold" aria-hidden="true" />
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute z-10 mt-3 w-screen max-w-md transform sm:px-0 ">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <div className="relative grid bg-white">
                <button
                  onClick={() => setAccount(!account)}
                  className="brand-color-semi-transparent hover:brand-color-opaque flex justify-between rounded-t-md py-3 px-4 transition duration-150 ease-in-out"
                >
                  <p className="text-base font-medium text-gray-900">
                    {!account ? session?.user?.name : business?.name}
                  </p>
                  {account ? (
                    <MdOutlineStoreMallDirectory className="text-2xl" />
                  ) : (
                    <MdPersonOutline className="text-2xl" />
                  )}
                </button>
                <Link
                  href="/business/create"
                  className="brand-color-semi-transparent hover:brand-color-opaque flex justify-between rounded-b-md py-3 px-4 transition duration-150 ease-in-out"
                >
                  <p className="text-base font-medium text-gray-900">
                    Create a business
                  </p>
                  <MdAddCircleOutline className="text-2xl" />
                </Link>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </>
    </Popover>
  );
}

export default function index() {
  const { account } = useContext<AccountContextType>(AccountContext);

  return (
    <PageContainer>
      <div className="flex w-full justify-center">
        <div className="w-full max-w-5xl grid-cols-2 gap-10 py-16 px-12 md:grid">
          <PopoverButton />
          <div></div>
          {account ? <PersonalSettings /> : <BusinessSettings />}
        </div>
      </div>
    </PageContainer>
  );
}
