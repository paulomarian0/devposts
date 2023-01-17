
export class CreatePostDto {
  title: string
  content: string
  thumbnail?: string | null
  authorId: number
}
