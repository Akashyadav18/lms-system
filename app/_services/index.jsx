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

export const getCourseById = async (id) => {
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
  }
  `
    const result = await request(MASTER_URL, query);
    return result;
}