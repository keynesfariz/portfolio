import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  const navLinks = [
    {
      name: "About",
      link: "/about",
      icon: "fi fi-rr-user",
      hover: "bg-rose-500",
    },
    {
      name: "Portfolio",
      link: "/portfolio",
      icon: "fi fi-rr-resources",
      hover: "bg-orange-500",
    },
    {
      name: "Writing",
      link: "/writing",
      icon: "fi fi-rr-edit",
      hover: "bg-teal-500",
    },
    {
      name: "Contact",
      link: "/contact",
      icon: "fi fi-rr-envelope",
      hover: "bg-sky-500",
    },
  ];

  const ProfilePicture = () => {
    return (
      <Image
        layout="fill"
        objectFit="cover"
        src={`https://www.gravatar.com/avatar/${process.env.NEXT_PUBLIC_PROFILE_PICTURE_MD5}`}
        alt="Fariz Muhammad"
      />
    );
  };

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
          {navLinks.map((item) => (
            <Link key={item.link} href={item.link} passHref>
              <a
                className={`cursor-pointer rounded px-4 py-1 font-bold ${
                  item.link == router.asPath ? item.hover + " text-white" : ""
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
        {navLinks.map((item) => (
          <Link key={item.link} href={item.link} passHref>
            <button
              title={item.name}
              className={`relative flex aspect-square w-10 items-center justify-center rounded-full transition-colors duration-150 ease-in-out ${
                router.asPath == item.link
                  ? `${item.hover} text-white`
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
