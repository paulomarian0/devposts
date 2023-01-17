import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAllPosts } from '../services/posts';

const Background = styled.div`
  background-color: #1a212b;
`

const ContainerPost = styled.div`
  display: block;
  margin: auto;
  width: 50%;
  `;

const CardPost = styled.div`
  background-color: #353940;
  border: 3px solid red;
  border-radius: 15px;
  text-align: center;
  justify-content: center;
  margin: 30px;
`;

const TitlePost = styled.h2`
  justify-content: center;
  display: flex;
  color: white;
`;

const ThumbnailPost = styled.img`
  justify-content: center;
  display: flex;
`;

const ContentPost = styled.div`
  border: 1px solid purple;
`

const AuthorPost = styled.div`
  font-size: 30px;
  color: green;
`

export function Post() {
  const [listPosts, setListPosts] = useState<any[]>([]);

  useEffect(() => {
    getAllPosts()
    .then((response:any)=>{
      setListPosts(response)
    })
  })


  return (

    <Background>
      <ContainerPost>
      {listPosts?.map((post) => {
        return(
          <CardPost key={post.id}>
            <TitlePost>{post.title}</TitlePost>
            <ThumbnailPost src={post.thumbnail} width="100%"/>
            <ContentPost>{post.content}</ContentPost>
            <AuthorPost>{post.author.name}</AuthorPost>
          </CardPost>
        )
      })}



      </ContainerPost>
    </Background>
  )
}