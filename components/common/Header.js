import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { navigationLinks } from "utilities/constants";
import ProfilePicture from "./ProfilePicture";

export default function Header() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className="!print:hidden border-y border-zinc-200 bg-orange-100 py-2 px-6 md:hidden">
        <div className="flex items-center justify-between">
          <Link href="/" passHref>
            <div
              title="Fariz Muhammad"
              className="relative aspect-square w-10 cursor-pointer overflow-hidden rounded-full border-[3px] border-rose-200 bg-rose-300"
            >
              <ProfilePicture />
            </div>
          </Link>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className={`aspect-square w-8 border-2 pt-1 text-white ${
              showMenu
                ? "rounded-full border-rose-200 text-xs text-rose-500"
                : "rounded-lg border-orange-200 text-orange-500"
            }`}
          >
            <i
              className={`fi ${showMenu ? "fi-br-cross" : "fi-br-menu-dots"}`}
            />
          </button>
        </div>
      </header>
      {showMenu && (
        <nav className="absolute inset-x-0 mt-[57px] flex justify-around border-y border-orange-200 bg-orange-100 px-6 py-3 text-zinc-600">
          {navigationLinks.map((item) => (
            <Link key={item.link} href={item.link} passHref>
              <a
                className={`cursor-pointer rounded px-4 py-1 font-bold ${
                  item.link == router.asPath ? "bg-rose-500 text-white" : ""
                }`}
              >
                {item.name}
              </a>
            </Link>
          ))}
        </nav>
      )}
      <nav className="!print:hidden sticky top-0 hidden h-screen w-20 flex-none flex-col items-center justify-center space-y-6 overflow-y-scroll md:flex">
        <Link href="/" passHref>
          <div className="absolute top-0 mt-6 cursor-pointer overflow-hidden rounded-full border-4 border-rose-200 bg-rose-300">
            <div className="relative aspect-square w-12" title="Fariz Muhammad">
              <ProfilePicture />
            </div>
          </div>
        </Link>
        {navigationLinks.map((item) => (
          <Link key={item.link} href={item.link} passHref>
            <button
              title={item.name}
              className={`relative flex aspect-square w-10 items-center justify-center rounded-full transition-colors duration-150 ease-in-out ${
                router.asPath == item.link
                  ? `bg-rose-500 text-white`
                  : `hover:bg-orange-100`
              }`}
            >
              <i className={`${item.icon} mt-1`} />
            </button>
          </Link>
        ))}
      </nav>
    </>
  );
}
