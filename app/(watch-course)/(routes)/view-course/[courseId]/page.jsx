"use client"

import React, { useEffect, useState } from 'react'
import ChapterNav from './_components/ChapterNav'
import FullVideoPlayer from './_components/FullVideoPlayer'
import { UserButton, useUser } from '@clerk/nextjs'
import { getCourseById } from '@/app/_services'
import { CompletedChapterContext } from '@/app/_context/CompletedChapterContext'

const ViewCourse = ({ params }) => {

    const { user } = useUser();
    const [course, setCourse] = useState([]);
    const [userCourse, setUserCourse] = useState();
    const [activeChapter, setActiveChapter] = useState([]);
    const [completedChapter, setCompletedChapter] = useState();

    useEffect(() => {
        user ? getCourse() : null;
    }, [user]);

    const getCourse = async () => {
        await getCourseById(params?.courseId, user.primaryEmailAddress.emailAddress)
            .then(res => {
                console.log("CompletedChapter :",res?.userEnrollCourses[0]?.completedChapter);
                setCourse(res.courseList);
                setUserCourse(res.userEnrollCourses);
                setCompletedChapter(res?.userEnrollCourses[0]?.completedChapter)
            })
    }

    return course?.name && (
        <CompletedChapterContext.Provider value={{completedChapter, setCompletedChapter}}>
        <div className='flex'>
            <div className='w-72 border shadow-sm h-screen z-50'>
                <ChapterNav course={course} userCourse={userCourse} setActiveChapter={(chapter) => setActiveChapter(chapter)} />
            </div>
            <div>
                <div className='float-right p-5'>
                    <UserButton/>
                </div>
                <FullVideoPlayer activeChapter={activeChapter} />
            </div>
        </div>
        </CompletedChapterContext.Provider>
    )
}

export default ViewCourse
