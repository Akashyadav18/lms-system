import request, { gql } from "graphql-request"

const MASTER_URL = "https://api-ap-south-1.hygraph.com/v2/" + process.env.NEXT_PUBLIC_HIGHGRAPH_KEY + "/master"

export const getCourseList = async () => {
    const query = gql`
    query courseList {
        courseLists {
          name
          free
          id
          banner {
            url
          }
          tags
          totalChapters
        }
      } 
    `
    const result = await request(MASTER_URL, query);
    return result;
}

export const getCourseById = async (id, userEmail) => {
  const query = gql`
  query course {
    courseList(where: {id: "`+id+`"}) {
      chapter {
        ... on Chapter {
          id
          name
          youtubeUrl
          video {
            url
          }
        }
      }
      description
      id
      name
      free
      totalChapters
    }
      userEnrollCourses(where: {
        courseId: "`+id+`", 
        userEmail: "`+userEmail+`",
      }) {
      courseId
      userEmail
      completedChapter {
        ... on CompletedChapter {
          chapterId
        }
      }
    }
  }
  `
    const result = await request(MASTER_URL, query);
    return result;
}

export const EnrollCourse = async (courseId, userEmail) => {
  const mutationQuery = gql`
  mutation EnrollCourse {
    createUserEnrollCourse(data: {courseId: "`+courseId+`", userEmail: "`+userEmail+`"}) {
      id
    }
  }
  
  `
  const result = await request(MASTER_URL, mutationQuery);
    return result;
}

export const PublishCourse = async (id) => {
  const mutationQuery = gql`
  mutation EnrollCourse {
    publishUserEnrollCourse(where: {id: "`+id+`"})
    {
      id
    }
  }  
  `
  const result = await request(MASTER_URL, mutationQuery);
  console.log("PublishCourse result:", result);
    return result;
}