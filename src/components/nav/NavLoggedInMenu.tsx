import { Menu } from "@headlessui/react";
import Link from "next/link";
import { signOut } from "next-auth/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavLoggedInMenu() {
  return (
    <>
      <Menu.Item>
        {({ active }) => (
          <Link
            href="/deal/create"
            className={classNames(
              active ? "bg-gray-100" : "",
              "block px-4 py-4 text-center text-sm font-semibold text-black"
            )}
          >
            Oppurtunities
          </Link>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <a
            href="#"
            className={classNames(
              active ? "bg-gray-100" : "",
              "block border-t-2 border-black px-4 py-4 text-center text-sm font-semibold text-black"
            )}
          >
            Community
          </a>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <a
            href="#"
            className={classNames(
              active ? "bg-gray-100" : "",
              "block border-t-2 border-black px-4 py-4 text-center text-sm font-semibold text-black"
            )}
          >
            Messages
          </a>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <Link
            href="/account"
            className={classNames(
              active ? "bg-gray-100" : "",
              "block border-t-2 border-black px-4 py-4 text-center text-sm font-semibold text-black"
            )}
          >
            Account
          </Link>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <button
            className={classNames(
              active ? "bg-gray-100" : "",
              "block w-full border-t-2 border-black px-4 py-4 text-center text-sm font-semibold text-black"
            )}
            onClick={() => signOut()}
          >
            Log out
          </button>
        )}
      </Menu.Item>
    </>
  );
}
