"use client"

import React from 'react'
import SearchBar from './SearchBar'
import { UserButton, useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

const Header = () => {

    const {user} = useUser()
    console.log(user);

    const router = useRouter();

  return (
    <div className='ml-64 p-6 border-b flex items-center justify-between'>
      <SearchBar/>
      {!user ? <button onClick={() => router.push('/sign-in')}>Login</button> : <UserButton/>}
    </div>
  )
}

export default Header
