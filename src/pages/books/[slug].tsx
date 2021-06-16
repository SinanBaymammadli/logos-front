import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { Price } from "../../components/Price";
import { Book, getAllBooks, getBook } from "../../data/book";
import { getFileUrl } from "../../data/image";
import { FaWhatsapp } from "react-icons/fa";
import { PHONE_NUMBER } from "../../data/constants";

interface Props {
  book: Book;
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const book = await getBook(params?.slug?.toString() ?? "1");

  return {
    props: {
      book,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const books = await getAllBooks();

  const paths = books.map((book) => ({
    params: { slug: book.slug.toString() },
  }));

  return { paths, fallback: false };
};

export default function BookDetail({ book }: Props) {
  const [currentUrl, setCurrentUrl] = React.useState("");

  React.useEffect(() => {
    setCurrentUrl(window?.location?.href);
  }, []);

  const renderImages = (): React.ReactChild[] => {
    return [
      <img key="main-img" src={getFileUrl(book.cover_image.url)} loading="lazy" />,
      ...book.detail_images.map((img) => {
        return (
          <div key={img.id}>
            <img src={getFileUrl(img.url)} loading="lazy" />
          </div>
        );
      }),
    ];
  };

  return (
    <Container maxW="6xl" py="10">
      <Flex flexDirection={["column", "column", "row"]}>
        <Box bg="black" maxW={["auto", "auto", "360px"]}>
          <Carousel className="book-carousel" infiniteLoop useKeyboardArrows swipeable={false}>
            {renderImages()}
          </Carousel>
        </Box>

        <Box pr="10" pb={[5, 5, 0]} />

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
              href={`https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=Salam, bu kitabı sifariş vermək istəyirdim ${currentUrl}`}
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
