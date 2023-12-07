import { EnrollCourse, PublishCourse } from '@/app/_services'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation';
import React from 'react'

const EnrollmentSection = ({ courseDetail, userCourse }) => {

    const {user} = useUser();
    const router = useRouter();

    const enrollCourse = async () => {
        if(user) {
            await EnrollCourse(courseDetail.id, user?.primaryEmailAddress?.emailAddress)
            .then(async(resp) => {
                console.log("Enroll Course :", resp);
                if(resp) {
                    await PublishCourse(resp?.createUserEnrollCourse?.id)
                    .then(result => {
                        console.log("result :", result);
                        if(result) {
                            router.push('/view-course/'+courseDetail.id);
                        }
                    })
                }
            })
        } else {
            router.push('/sign-in');
        }
    }

    return (
        <div>
            {userCourse?.courseId ? 
                <div className='mt-5 border rounded-lg p-2 text-center'>
                    <h2 className='text-gray-500'>Continue to Build project, Access Source code and Track your process for free!</h2>
                    <button className='p-2 w-full bg-purple-500 text-white rounded-lg text-[14px] mt-2 hover:bg-purple-700'
                    onClick={() => router.push('/view-course/'+courseDetail.id)} >Continue</button>
                </div>
                : null
            }
            {courseDetail.free && !userCourse?.courseId  ? (
                <div className='mt-5 border rounded-lg p-2 text-center'>
                    <h2 className='text-gray-500'>Learn and Build project, Access Source code and Track your process for free!</h2>
                    <button className='p-2 w-full bg-purple-500 text-white rounded-lg text-[14px] mt-2 hover:bg-purple-700'
                    onClick={() => enrollCourse()}>Enroll Now</button>
                </div>
            ) : !userCourse?.courseId ? (
                <div className='mt-5 border rounded-lg p-2 text-center'>
                    <h2 className='text-gray-500'>Buy this course, Source code and Track your process</h2>
                    <button className='p-2 w-full bg-purple-500 text-white rounded-lg text-[14px] mt-2 hover:bg-purple-700'>Buy course for $1.99</button>
                </div>
            ): null }
            <div className='mt-5 border rounded-lg p-2 text-center'>
                <h2 className='text-gray-500'>Buy Membership monthly and get all course, Source code and Track your process</h2>
                <button className='p-2 w-full bg-purple-500 text-white rounded-lg text-[14px] mt-2 hover:bg-purple-700'>Buy Membership by 4.99/Month</button>
            </div>
        </div>
    )
}

export default EnrollmentSection
