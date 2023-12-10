"use client"

import { Layout, Mail, Search, Shield } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const SideBarNav = () => {

  const pathName = usePathname();
  console.log(pathName);

  const menuList = [
    {
      id: 1,
      name: "Browse",
      icon: Search,
      path: '/browse'
    },
    {
      id: 2,
      name: "Dashboard",
      icon: Layout,
      path: '/dashboard'
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Shield,
      path: '/upgrade'
    },
    {
      id: 4,
      name: "Newsletter",
      icon: Mail,
      path: '/newsletter'
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className='h-full bg-white border-r flex flex-col overflow-y-auto shadow-md'>
      <div className='p-5 border-b flex gap-4 justify-center items-center'>
        <Image src={'/lms.png'} alt='logo' width={50} height={100} className='rounded-full' />
        <h1 className='text-2xl font-semibold'>LMS</h1>
      </div>
      <div>
        {menuList.map((item, index) => (
          <Link href={item.path} key={index}>
            <div key={item.id} className={`flex gap-2 items-center p-4 px-6 text-gray-500 hover:bg-gray-100 hover:text-black cursor-pointer
        ${pathName== item.path ? "bg-purple-100 text-purple-800" : null} 
        `}
              onClick={() => setActiveIndex(index)}
            >
              <item.icon />
              <h2>{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SideBarNav
