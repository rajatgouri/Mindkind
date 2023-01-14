import Link from "next/link";

export default function Footer() {
  return (
    <div className="fixed bottom-0 hidden w-full border border-t bg-white md:block">
      <div className="mx-auto flex max-w-7xl justify-between px-8 py-5">
        <div className="space-x-6">
          <Link href="/" className="text-center text-sm">
            MindKind, Inc. 2022
          </Link>

          <Link href="/" className="text-center text-sm">
            Terms
          </Link>
          <Link href="/" className="text-center text-sm">
            Policy
          </Link>
        </div>
        <div>
          <Link href="/" className="text-center text-sm">
            Support
          </Link>
        </div>
      </div>
    </div>
  );
}
