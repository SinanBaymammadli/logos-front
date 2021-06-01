import { GetStaticProps } from "next";
import { Book, getAllBooks } from "../data/book";
import { BookCard } from "../components/BookCard";
import { Input, Container, SimpleGrid, Flex, Button, InputGroup, InputRightAddon } from "@chakra-ui/react";

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
    <main>
      <Container maxW="6xl">
        {/* <Flex pt="10">
          <Input placeholder="Kitab axtar" />

          <Button ml="5">Axtar</Button>
        </Flex> */}

        <SimpleGrid columns={5} spacing="40px" py="10">
          {books.map((book) => {
            return <BookCard key={book.id} book={book} />;
          })}
        </SimpleGrid>
      </Container>
    </main>
  );
}
