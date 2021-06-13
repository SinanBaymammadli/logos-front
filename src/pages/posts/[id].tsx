import { Container, Heading } from "@chakra-ui/react";
import Markdown from "markdown-to-jsx";
import { GetStaticPaths, GetStaticProps } from "next";
import { Post, getAllPosts, getPost } from "../../data/posts";

interface Props {
  post: Post;
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const post = await getPost(params?.id?.toString() ?? "1");

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
};

export default function PostDetail({ post }: Props) {
  return (
    <Container maxW="6xl" py="10">
      <Heading pb="5">{post.title}</Heading>
      <Markdown>{post.content}</Markdown>
    </Container>
  );
}
