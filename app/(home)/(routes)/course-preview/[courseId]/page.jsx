"use client"

import { getCourseById } from '@/app/_services';
import React, { useEffect, useState } from 'react'
import VideoPlayer from './_components/VideoPlayer';
import CourseDetails from './_components/CourseDetails';
import OptionSection from './_components/OptionSection';
import EnrollmentSection from './_components/EnrollmentSection';
import { useUser } from '@clerk/nextjs';

const CoursePreview = ({ params }) => {

  const [courseDetail, setCourseDetail] = useState([]);

  const {user} = useUser();

  useEffect(() => {
    params.courseId ? getCourse(params.courseId) : null;
  }, [user])

  const getCourse = () => {
    getCourseById(params.courseId, user?.primaryEmailAddress?.emailAddress).then(res => {
      console.log(res);
      setCourseDetail(res.courseList);
    })
  }

  return courseDetail?.name && (
    <div className=''>
      <div className='grid grid-cols-1 md:grid-cols-3'>
        <div className='col-span-2'>
          {courseDetail?.chapter[0] ? <VideoPlayer videoUrl={courseDetail.chapter[0].video.url}/> : null}
          <CourseDetails courseDetail={courseDetail} />
        </div>
        <div className='mx-5'>
          <OptionSection/>
          <EnrollmentSection courseDetail={courseDetail}/>
        </div>
      </div>
    </div>
  )
}

export default CoursePreview
