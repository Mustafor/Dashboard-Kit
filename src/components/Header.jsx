import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Brat, Notificon, SearchImg } from '../assets/images/Icons'

function Header() {
    const [pathTitle, setPathTitle] = useState("Overview")
    const path = useLocation()

    function renderTitle(value){
        switch(value){
            case "/":
           setPathTitle("Overview")
           break;
            case "/tickets":
           setPathTitle("Tickets")
           break;
           case "/ideas":
            setPathTitle("Ideas")
            break;
            case "/contacts":
                setPathTitle("Contacts")
            break;
            case "/agents":
                setPathTitle("Agents")
            break;
            case "/articles":
                setPathTitle("Articles")
            break;
        }
    }

    useEffect(() =>{
        renderTitle(path.pathname)
    },[path])

  return (
    <div className='flex items-center justify-between'>
        <h2 className='font-bold text-[24px] leading-[30px]'>{pathTitle}</h2>
        <div className='flex items-center gap-[24px] border-r-[2px] border-[#DFE0EB]'>
            <SearchImg/>
            <Notificon/>
        </div>
        <div className='flex items-center gap-[14px]'>
            <strong className='text-[14px] font-bold leading-[20px] text-[#252733]'>Jones Ferdinand</strong>
            <Brat/>
        </div>
    </div>
  )
}

export default Header