import { Search } from 'lucide-react'
import React from 'react'

const SearchBar = () => {
  return (
    <div className='flex gap-3 text-[15px] items-center border shadow-sm p-2 rounded-lg bg-gray-50 text-gray-500'>
      <Search/>
      <input type='text' placeholder='Search Course' className='bg-transparent outline-none'/>
    </div>
  )
}

export default SearchBar
