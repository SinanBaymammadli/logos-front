import { GetStaticProps } from "next";
import Head from "next/head";
import { Book, getAllBooks } from "../data/book";
import { BookCart } from "../components/BookCart";
import { Container, SimpleGrid, Stack } from "@chakra-ui/layout";

interface Props {
  books: Book[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const books = await getAllBooks();

  return {
    props: {
      books,
    },
  };
};

export default function Home({ books }: Props) {
  return (
    <>
      <Head>
        <title>Logos Nəşriyyat</title>
        <meta name="description" content="Logos Nəşriyyat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container as={Stack} maxW={"6xl"}>
          <SimpleGrid columns={[1, 2, 2, 3]} spacing="40px" py="10">
            {books.map((book) => {
              return <BookCart key={book.id} book={book} />;
            })}
          </SimpleGrid>
        </Container>
      </main>
    </>
  );
}
