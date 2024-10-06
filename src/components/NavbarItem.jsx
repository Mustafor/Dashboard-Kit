import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavbarItem = ({item}) => {
  return (
    <NavLink className={"flex relative items-center text-[#A4A6B3] text-[16px] leading-5 space-x-6 py-[18px] pl-8"} to={item.path}>
        {item.icoon}
    <span>{item.title}</span>
    </NavLink>  
    )
}

export default NavbarItem
