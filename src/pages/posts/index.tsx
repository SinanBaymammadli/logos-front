import { Container, Heading, SimpleGrid, Text, Link } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import NextLink from "next/link";
import React from "react";
import { getAllPosts, Post } from "../../data/posts";
import truncate from "lodash/truncate";

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
                <Heading size="md" py="2">
                  {post.title}
                </Heading>
                <Text>{truncate(post.content, { length: 100 })}</Text>
              </Link>
            </NextLink>
          );
        })}
      </SimpleGrid>
    </Container>
  );
}
