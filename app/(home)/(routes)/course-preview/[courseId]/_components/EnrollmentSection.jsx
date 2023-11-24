import React from 'react'

const EnrollmentSection = ({ courseDetail }) => {
    return (
        <div>
            {courseDetail.free ? (
                <div className='mt-5 border rounded-lg p-2 text-center'>
                    <h2 className='text-gray-500'>Learn and Build project, Access Source code and Track your process for free!</h2>
                    <button className='p-2 w-full bg-purple-500 text-white rounded-lg text-[14px] mt-2 hover:bg-purple-700'>Enroll Now</button>
                </div>
            ) : (
                <div className='mt-5 border rounded-lg p-2 text-center'>
                    <h2 className='text-gray-500'>Buy this course, Source code and Track your process</h2>
                    <button className='p-2 w-full bg-purple-500 text-white rounded-lg text-[14px] mt-2 hover:bg-purple-700'>Buy course for $1.99</button>
                </div>
            )}
            <div className='mt-5 border rounded-lg p-2 text-center'>
                <h2 className='text-gray-500'>Buy Membership monthly and get all course, Source code and Track your process</h2>
                <button className='p-2 w-full bg-purple-500 text-white rounded-lg text-[14px] mt-2 hover:bg-purple-700'>Buy Membership by 4.99/Month</button>
            </div>
        </div>
    )
}

export default EnrollmentSection
