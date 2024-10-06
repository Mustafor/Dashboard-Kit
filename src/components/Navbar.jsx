import React from 'react'
import { Logo, Overwiev, Tickets, Ideas, Contacts, Agents, Articles } from '../assets/images/Icons'
import NavbarItem from './NavbarItem'

function Navbar() {
    const navList = [
        {
            id:1,
            icon:<Overwiev/>,
            title:"Overview",
            path:"/"
        },        
        {
            id:2,
            icon:<Tickets/>,
            title:"Tickets",
            path:"/tickets"
        },        
        {
            id:3,
            icon:<Ideas/>,
            title:"Ideas",
            path:"/ideas"
        },        
        {
            id:4,
            icon:<Contacts/>,
            title:"Contacts",
            path:"/contacts"
        },        
        {
            id:5,
            icon:<Agents/>,
            title:"Agents",
            path:"/agents"
        },        
        {
            id:6,
            icon:<Articles/>,
            title:"Articles",
            path:"/articles"
        },
    ]
  return (
    <div className='w-[20%] h-[174vh] bg-[#363740]'>
        <div className='pt-[27px] flex items-center space-x-[12px] pl-[32px] pb-[39px]'>
            <Logo/>
            <span className='text-[18px] font-bold text-[#A4A6B3]'>Dashboard Kit</span>
        </div>
        <nav>
            {navList.map(item => (
                <NavbarItem item={item} key={item.id}/>
            ))}
        </nav>
    </div>
  )
}

export default Navbar