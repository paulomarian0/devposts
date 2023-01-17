import axios from 'axios'

export async function getAllPosts(){
  const payload = await axios.get<Promise<any>>('http://localhost:3000/posts')
  .then((res) => {
    return res.data
  })
  .catch((err) => {
    console.log(err)
  })

  return payload;
}