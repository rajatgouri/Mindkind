import Link from "next/link";

import {
MdOutlineStoreMallDirectory,
MdOutlineLocationOn,
MdOutlinePayments,
  MdOutlineLocalPostOffice,
} from "react-icons/md";

export default function BusinessSettings() {
  return (
    <>
      <Link
        href="/business"
        className="hover:brand-color-opaque flex h-40 w-full max-w-md flex-col items-center justify-center rounded-md bg-white drop-shadow-md"
      >
        <MdOutlineStoreMallDirectory className="text-2xl" />
        <p className="text-xl mt-4">Business information</p>
      </Link>
      <Link
        href="/account"
        className="hover:brand-color-opaque flex h-40 w-full max-w-md flex-col items-center justify-center rounded-md bg-white drop-shadow-md"
      >
        <MdOutlineLocationOn className="text-2xl" />
        <p className="text-xl mt-4">Locations</p>
      </Link>

      <Link
        href="/account"
        className="hover:brand-color-opaque flex h-40 w-full max-w-md flex-col items-center justify-center rounded-md bg-white drop-shadow-md"
      >
        <MdOutlinePayments className="text-2xl" />
        <p className="text-xl mt-4">Payouts</p>
      </Link>
      <Link
        href="/account"
        className="hover:brand-color-opaque flex h-40 w-full max-w-md flex-col items-center justify-center rounded-md bg-white drop-shadow-md"
      >
        <MdOutlineLocalPostOffice className="text-2xl" />
        <p className="text-xl mt-4">Alerts</p>
      </Link>
    </>
  );
}
