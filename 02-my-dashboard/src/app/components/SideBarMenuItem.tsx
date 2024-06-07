'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
    path: string,
    icon: JSX.Element,
    title: string,
    subtitle: string
}

export const SideBarMenuItem = ({path, icon, title, subtitle} : Props) => {

  const currentPath = usePathname();
  const isActive = currentPath === path;
  

  return (
    <Link href={ path } className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 ${ isActive ? `bg-blue-800`: ``} hover:bg-white/5 transition ease-linear duration-150`}>
        <div>
          {icon}
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-bold leading-5 text-white">{title}</span>
          <span className="text-sm text-white/50 hidden md:block">{subtitle}</span>
        </div>
      </Link>
  )
}