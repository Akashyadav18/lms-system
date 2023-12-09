"use client"

import React, { useEffect, useState } from 'react'
import CategoryFilter from './_components/CategoryFilter'
import { getCourseList } from '@/app/_services'
import CourseList from './_components/CourseList'

const Browse = () => {

  const [courses, setCourses] = useState([]);
  const [coursesOrg, setCoursesOrg] = useState([]);

  useEffect(() => {
    getCourses();
  }, [])

  const getCourses = () => {
    getCourseList().then(res => {
      console.log("courseLists :",res);
      setCourses(res.courseLists);
      setCoursesOrg(res.courseLists)
    })
  }
  console.log("courses", courses);

  const filterCourse = (category) => {
    if(category == 'all') {
      setCourses(coursesOrg)
      return;
    }
    if (!coursesOrg) {
      console.error('coursesOrg is undefined');
      return;
    }
    const filteredList = coursesOrg.filter(course => {
      if (!course.tag) {
        console.error('course.tag is undefined for', course);
        return false;
      }
      return course.tag.includes(category);
    })
    setCourses(filteredList);
  }

  return (
    <div>
      <CategoryFilter selectedCategory={(category) =>filterCourse(category) }/>
      {courses && <CourseList courses={courses}/>}
    </div>
  )
}

export default Browse
