import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  HomeIcon,
  TagIcon,
  ClockIcon,
  InformationCircleIcon,
  ShoppingBagIcon,
  SparklesIcon,
  ArchiveIcon,
  MenuAlt1Icon,
  PaperClipIcon,
  DownloadIcon,
  UserIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";
import Hamburger from "hamburger-react";
import Link from "next/link";
import { SvendaIcon, SvendaLogo } from './SvendaLogo';

// ... (keep the existing constants)

function Header() {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      console.log("Open");
    } else {
      console.log("Closed");
    }
  }, [isOpen]);

  return (
    <>
      <div className="bg-[#ffe600]">
        <header className="w-full bg-[#ffe600] sticky top-0 z-50 px-2.5 lg:px-0 py-2 lg:py-2 lg:border-0 border-b-[0.1px] border-[#dfcf3e] ">
          <div className="max-w-[1200px] mx-auto flex justify-between items-center">
            <Link href="/">
              <div className="w-24 lg:w-80 lg:mr-14 lg:-ml-1 lg:overflow-hidden">
                <div className="hidden lg:block">
                  <SvendaLogo />
                </div>
                <div className="lg:hidden">
                  <SvendaIcon />
                </div>
              </div>
            </Link>
            <SearchBar />

            {/* ... (keep the rest of the component unchanged) */}
          </div>
        </header>

        {/* ... (keep the rest of the component unchanged) */}
      </div>
    </>
  );
}

export default Header;

