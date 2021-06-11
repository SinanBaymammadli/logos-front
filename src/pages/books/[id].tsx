import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { Price } from "../../components/Price";
import { Book, getAllBooks, getBook } from "../../data/book";
import { getFileUrl } from "../../data/image";
import { FaWhatsapp } from "react-icons/fa";

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
  const [currentUrl, setCurrentUrl] = React.useState("");

  React.useEffect(() => {
    setCurrentUrl(window?.location?.href);
  }, []);

  return (
    <Container maxW="6xl" py="10">
      <Flex flexDirection={["column", "column", "row"]}>
        <Flex justifyContent="center" pb={["5", "5", 0]}>
          <img
            src={getFileUrl(book.cover_image.url)}
            width={book.cover_image.width}
            height={book.cover_image.height}
            style={{ aspectRatio: "0.649", minWidth: 288, maxWidth: 320 }}
            loading="lazy"
          />
        </Flex>
        <Box pr="10" />
        <div>
          <Heading pb="5">{book.title}</Heading>

          <Flex alignItems="center" pb="5">
            <Heading size="md" pr="5">
              <Price amount={book.price} />
            </Heading>

            <Button
              as="a"
              leftIcon={<FaWhatsapp />}
              colorScheme="green"
              href={`https://api.whatsapp.com/send?phone=+994554169939&text=Salam, bu kitabı sifariş vermək istəyirdim ${currentUrl}`}
            >
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
    </Container>
  );
}
