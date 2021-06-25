import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box, Button, Container, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import Head from "next/head";
import { Price } from "../../components/Price";
import { Book, getAllBooks, getBook, getRelatedBook } from "../../data/book";
import { getFileUrl } from "../../data/image";
import { FaWhatsapp } from "react-icons/fa";
import { PHONE_NUMBER } from "../../data/constants";
import { BookCard } from "../../components/BookCard";

interface Props {
  book: Book;
  relatedBooks: Book[];
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const book = await getBook(params?.slug?.toString() ?? "1");
  const relatedBooks = await getRelatedBook(book);

  return {
    props: {
      book,
      relatedBooks,
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

export default function BookDetail({ book, relatedBooks }: Props) {
  const [currentUrl, setCurrentUrl] = React.useState("");

  React.useEffect(() => {
    setCurrentUrl(window?.location?.href);
  }, []);

  const renderImages = (): React.ReactChild[] => {
    return [
      <img
        key="main-img"
        src={getFileUrl(book.cover_image.url)}
        loading="lazy"
        width={book.cover_image.width}
        height={book.cover_image.height}
        style={{ maxHeight: 600, width: "auto" }}
      />,
      ...book.detail_images.map((img) => {
        return (
          <div key={img.id}>
            <img
              src={getFileUrl(img.url)}
              width={book.cover_image.width}
              height={book.cover_image.height}
              loading="lazy"
              style={{ maxHeight: 600, width: "auto" }}
            />
          </div>
        );
      }),
    ];
  };

  return (
    <>
      <Head>
        <title>Logos Nəşriyyat | {book.title}</title>
        <meta name="description" content={book.title} />
        <meta property="og:title" content={book.title} />
        <meta property="og:description" content={book.description} />
        <meta property="og:image" content={getFileUrl(book.cover_image.url)} />
        <meta property="og:url" content={currentUrl} />
        <meta name="twitter:card" content={getFileUrl(book.cover_image.url)} />
        <meta name="keywords" content={`${book.title}, ${book.description?.split(" ").join(",")}`} />
      </Head>
      <Container maxW="6xl" py="10">
        <Flex flexDirection={["column", "column", "row"]}>
          <Box bg="black" w={["100%", "100%", "360px"]} minH={["505px", "660px"]}>
            <Carousel className="book-carousel" infiniteLoop swipeable={false}>
              {renderImages()}
            </Carousel>
          </Box>

          <Box pr="10" pb={[5, 5, 0]} />

          <Box flex="1">
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
          </Box>
        </Flex>

        {relatedBooks.length > 0 ? (
          <Box pt="20">
            <Heading pb="10">Oxşar kitablar</Heading>
            <SimpleGrid columns={[2, 3, 4, 5]} spacing="40px">
              {relatedBooks.map((book) => {
                return <BookCard key={book.id} book={book} />;
              })}
            </SimpleGrid>
          </Box>
        ) : null}
      </Container>
    </>
  );
}
