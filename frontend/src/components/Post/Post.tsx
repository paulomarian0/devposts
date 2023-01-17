import { useEffect, useState } from 'react';
import { getAllPosts } from '../../services/posts';
import {
  AuthorPost,
  Background,
  CardPost,
  ContainerPost,
  ContentPost,
  ThumbnailPost,
  TitlePost
} from './styles';

export function Post() {
  const [listPosts, setListPosts] = useState<any[]>([]);

  useEffect(() => {
    getAllPosts()
      .then((response: any) => {
        setListPosts(response)
      })
  })


  return (

    <Background>
      <ContainerPost>
        {listPosts?.map((post) => {
          return (
            <CardPost key={post.id}>
              <TitlePost>{post.title}</TitlePost>
              <ThumbnailPost src={post.thumbnail} width="100%" />
              <ContentPost>{post.content}</ContentPost>
              <AuthorPost>{post.author.name}</AuthorPost>
            </CardPost>
          )
        })}
      </ContainerPost>
    </Background>
  )
}