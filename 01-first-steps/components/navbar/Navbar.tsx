import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from "../Active-Link/ActiveLink"

export const Navbar = () => {

  const navItems = [
    {path: '/about', text:'About'},
    {path: '/price', text:'price'},
    {path: '/contact', text:'contact'},
  ]

  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href={"/"} className="flex items-center">
        <HomeIcon className="mr-2"></HomeIcon>
      <span>Home</span>
       </Link>
        

        <div className="flex flex-1">         </div>
        {navItems.map( navItem =>(
        <ActiveLink key={navItem.path} {...navItem}/>
))}

    </nav>
  )
}
