import { Book } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CategoryItem from './CategoryItem'

const CourseList = ({ courses }) => {
    return (
        <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {courses.map((course, index) => (
                <Link key={index} href={'/course-preview/'+course.id}>
                    <CategoryItem course={course}/>
                </Link>
            ))
            }
        </div>
    )
}

export default CourseList
