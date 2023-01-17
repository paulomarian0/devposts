import { axiosBaseUrl } from "./axios-base-url";

export async function getAllPosts(){
  const payload = await axiosBaseUrl.get<Promise<any>>('/posts')
  .then((res) => {
    return res.data
  })
  .catch((err) => {
    console.log(err)
  })

  return payload;
}