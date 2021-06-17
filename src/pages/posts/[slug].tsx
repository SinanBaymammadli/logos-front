import { Container, Heading, Text } from "@chakra-ui/react";
import Markdown from "markdown-to-jsx";
import { GetStaticPaths, GetStaticProps } from "next";
import { getFileUrl } from "../../data/image";
import { Post, getAllPosts, getPost } from "../../data/posts";
import dayjs from "dayjs";

interface Props {
  post: Post;
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const post = await getPost(params?.slug?.toString() ?? "1");

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();

  const paths = posts.map((post) => ({
    params: { slug: post.slug.toString() },
  }));

  return { paths, fallback: false };
};

export default function PostDetail({ post }: Props) {
  return (
    <Container maxW="6xl" py="10">
      <img
        src={getFileUrl(post.cover_image.url)}
        width={post.cover_image.width}
        height={post.cover_image.height}
        style={{ width: "100%" }}
        loading="lazy"
      />

      <Heading pt="5" pb="2">
        {post.title}
      </Heading>
      <Text color="gray.600" fontSize="sm" pb="5">
        {dayjs(post.published_at).format("DD MMMM YYYY")}
      </Text>

      <Markdown
        options={{
          overrides: {
            h1: {
              component: (props) => <Heading as="h1" size="xl" {...props} />,
            },
            p: {
              component: (props) => <Text {...props} mb="4" />,
            },
            img: {
              component: (props) => <img {...props} style={{ aspectRatio: "1000/667", width: "100%" }} />,
            },
          },
        }}
      >
        {post.content}
      </Markdown>
    </Container>
  );
}
