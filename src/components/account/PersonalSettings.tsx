import Link from "next/link";
import Image from "next/image";
import {
  MdPersonOutline,
  MdHowToVote,
  MdOutlineLocalPostOffice,
} from "react-icons/md";

export default function PersonalSettings() {
  return (
    <>
      <Link
        href="/account/profile"
        className="hover:brand-color-opaque flex h-40 w-full max-w-md flex-col items-center justify-center rounded-md bg-white drop-shadow-md"
      >
        <MdPersonOutline className="text-2xl" />
        <p className="text-xl mt-4">Personal information</p>
      </Link>
      <Link
        href="/account"
        className="hover:brand-color-opaque flex h-40 w-full max-w-md flex-col items-center justify-center rounded-md bg-white drop-shadow-md"
      >
        <MdHowToVote className="text-2xl" />
        <p className="text-xl mt-4">Community</p>
      </Link>

      <Link
        href="/account"
        className="hover:brand-color-opaque flex h-40 w-full max-w-md flex-col items-center justify-center rounded-md bg-white drop-shadow-md"
      >
        <Image src="/diversity_icon.svg" alt="icon" width={28} height={28} />
        <p className="text-xl mt-4">Referrals</p>
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
