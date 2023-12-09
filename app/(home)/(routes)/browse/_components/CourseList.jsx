import { Book } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CourseList = ({ courses }) => {
    return (
        <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {courses.map((course, index) => (
                <Link key={index} href={'/course-preview/'+course.id}>
                <div key={course.id} className='border p-2 rounded-lg cursor-pointer shadow hover:border-purple-400'>
                    <Image src={course.banner.url} alt={course.name} width={1000} height={600} className='rounded-lg' />
                    <div className='flex flex-col gap-1 lg:gap-2 text-center'>
                        <h2 className='text-[18px] font-medium '>{course.name}</h2>
                        <div className='flex items-center gap-3'>
                            <Book className='h-6 w-6 text-purple-600 rounded-full bg-purple-100 p-1' />
                            <h3 className='text-[14px] text-gray-400'>{course.totalChapters} Chapters</h3>
                        </div>
                        <div className='w-12 mx-auto'>
                            <h3 className={`text-sm p-1 rounded-md border ${course.free ? 'text-teal-200 bg-teal-50 ': 'text-red-400 bg-red-100'}`}>{course.free ? 'Free' : 'Paid'}</h3>
                        </div>
                    </div>

                </div>
                </Link>
            ))
            }
        </div>
    )
}

export default CourseList
