import { Box, Button, Container, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import React from "react";
import { Price } from "../../components/Price";
import { Book, getAllBooks, getBook } from "../../data/book";
import { getFileUrl } from "../../data/image";
import { MdCall } from "react-icons/md";

interface Props {
  book: Book;
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const book = await getBook(params.id.toString());

  return {
    props: {
      book,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const books = await getAllBooks();

  const paths = books.map((book) => ({
    params: { id: book.id.toString() },
  }));

  return { paths, fallback: false };
};

export default function BookDetail({ book }: Props) {
  return (
    <Container maxW="6xl" py="10">
      <Flex flexDirection={["column", "column", "row"]}>
        <Flex justifyContent="center" pb={["5", "5", 0]}>
          <Image
            src={getFileUrl(book.cover_image.url)}
            width={book.cover_image.width}
            height={book.cover_image.height}
          />
        </Flex>
        <Box pr="10" />
        <div>
          <Heading pb="5">{book.title}</Heading>

          <Flex alignItems="center" pb="5">
            <Heading size="md" pr="5">
              <Price amount={book.price} />
            </Heading>

            <Button leftIcon={<MdCall />} colorScheme="green">
              Sifariş ver
            </Button>
          </Flex>

          <Heading size="sm" pb="5">
            {book.lang} ({book.level})
          </Heading>
          <Heading size="sm" pb="5">
            {book.author.name}
          </Heading>
          <Text>{book.description}</Text>
        </div>
      </Flex>

      {/* <SimpleGrid columns={5} spacing="40px" py="10">
          {books.map((book) => {
            return <BookCard key={book.id} book={book} />;
          })}
        </SimpleGrid> */}
    </Container>
  );
}
