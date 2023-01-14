import { Fragment, useContext } from "react";
import { signIn, useSession } from "next-auth/react";

import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MdPersonOutline, MdOutlineStoreMallDirectory } from "react-icons/md";

import Image from "next/image";
import Link from "next/link";

import NavLoggedInMenu from "./NavLoggedInMenu";

import type { AccountContextType } from "src/components/contexts/ToggleAccountContext";
import { AccountContext } from "src/components/contexts/ToggleAccountContext";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function SimpleNav() {
  const { account } = useContext<AccountContextType>(AccountContext);

  const { data: sessionData } = useSession();

  return (
    <Disclosure as="nav" className="border border-b bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center  sm:items-stretch sm:justify-start">
            <Link href="/" className="z-10 flex flex-shrink-0 items-center">
              <Image
                src="/logofull.svg"
                alt="MindKind"
                width={200}
                height={50}
                className="block h-12 w-auto lg:hidden"
              />
              <Image
                src="/logofull.svg"
                alt="MindKind"
                width={200}
                height={50}
                className="hidden h-12 w-auto lg:block"
              />
            </Link>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="sr-only">Open user menu</span>
                  {account ? (
                    <MdPersonOutline
                      className="h-8 w-8 rounded-full"
                      aria-hidden="true"
                    />
                  ) : (
                    <MdOutlineStoreMallDirectory
                      className="h-8 w-8 rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-6 w-48 origin-top-right rounded-md border-2 border-black bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {sessionData ? (
                    <NavLoggedInMenu />
                  ) : (
                    <>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block w-full px-4 py-4 text-center text-sm font-semibold text-black"
                            )}
                            onClick={() => signIn()}
                          >
                            Login
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="src/components/nav/Nav#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block border-t-2 border-black px-4 py-4 text-center text-sm font-semibold text-black"
                            )}
                          >
                            Sign up
                          </a>
                        )}
                      </Menu.Item>
                    </>
                  )}
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
