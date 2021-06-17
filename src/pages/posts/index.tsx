import { GetStaticProps } from "next";
import NextLink from "next/link";
import { Container, Heading, SimpleGrid, Text, Link } from "@chakra-ui/react";
import React from "react";
import { getAllPosts, Post } from "../../data/posts";
import dayjs from "dayjs";
import { getFileUrl } from "../../data/image";

interface Props {
  posts: Post[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
};

export default function Posts({ posts }: Props) {
  return (
    <Container maxW="6xl" py="10">
      <Heading pb="5">Bloq</Heading>

      <SimpleGrid columns={[1, 1, 2]} spacing="40px">
        {posts.map((post) => {
          return (
            <NextLink key={post.id} href={`/posts/${post.slug}`} passHref>
              <Link>
                <img
                  src={getFileUrl(post.cover_image.url)}
                  width={post.cover_image.width}
                  height={post.cover_image.height}
                  loading="lazy"
                />
                <Heading size="md" py="2">
                  {post.title}
                </Heading>
                <Text color="gray.600" fontSize="sm">
                  {dayjs(post.published_at).format("DD MMMM YYYY")}
                </Text>
              </Link>
            </NextLink>
          );
        })}
      </SimpleGrid>
    </Container>
  );
}
