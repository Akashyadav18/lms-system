import { Book } from 'lucide-react'
import React from 'react'

const CourseDetails = ({ courseDetail }) => {
    return (
        <div className='my-5 p-5 border rounded-lg'>
            <h2 className='text-[20px] font-medium'>{courseDetail.name}</h2>
            <div className='flex items-center mt-3 gap-3'>
                <Book className='h-6 w-6 text-purple-600 rounded-full bg-purple-100 p-1' />
                <h3 className='text-[14px] text-gray-400'>{courseDetail.totalChapters} Chapters</h3>
            </div>
            <p className='mt-5 line-clamp-5 text-gray-500'>{courseDetail.description}</p>
        </div>
    )
}

export default CourseDetails
