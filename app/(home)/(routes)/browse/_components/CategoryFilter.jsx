"use client"

import React, { useState } from 'react'

const CategoryFilter = () => {

    const [activeIndex, setActiveIndex] = useState(0)

    const filterOptions = [ 
        {
            id: 1,
            name: "All",
            value: 'all'
        },
        {
            id: 2,
            name: "React Js",
            value: 'react'
        },
        {
            id: 3,
            name: "Next Js",
            value: 'nextjs'
        },
        {
            id: 4,
            name: "Tailwind css",
            value: 'tailwindcss'
        },
        {
            id: 5,
            name: "Firebase",
            value: 'firebase'
        },
    ]

  return (
    <div className='flex gap-5'>
      {filterOptions.map((item, index) => (
        <button key={item.id} className={`border-2 p-2 px-4 text-sm rounded-md hover:border-purple-800 font-medium 
          ${activeIndex ===index ? "border-purple-800 bg-purple-100" : null}
        `}
        onClick={() => setActiveIndex(index)}
        >
            <h2>{item.name}</h2>
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
