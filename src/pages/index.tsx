import { GetStaticProps } from "next";
import { Book, getAllBooks } from "../data/book";
import { BookCard } from "../components/BookCard";
import { Input, Container, SimpleGrid, Flex, Button, InputGroup, InputRightAddon, Select, Box } from "@chakra-ui/react";
import React from "react";

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
        <Flex pt="10" gridGap="5" flexDirection={["column", "column", "row"]}>
          <Box flex="1">
            <Input placeholder="Kitab axtar" />
          </Box>
          <Box w={["auto", "auto", "200px"]}>
            <Select placeholder="Dili seçin">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Box>
          <Box w={["auto", "auto", "200px"]}>
            <Select placeholder="Səviyyəni seçin">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Box>
        </Flex>

        <SimpleGrid columns={[2, 3, 4, 5]} spacing="40px" py="10">
          {books.map((book) => {
            return <BookCard key={book.id} book={book} />;
          })}
        </SimpleGrid>
      </Container>
    </main>
  );
}
