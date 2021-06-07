import { GetStaticProps } from "next";
import { Book, getAllBooks } from "../data/book";
import { BookCard } from "../components/BookCard";
import { Input, Container, SimpleGrid, Flex, Select, Box } from "@chakra-ui/react";
import React from "react";
import { Language, Languages } from "../data/languages";
import { useRouter } from "next/router";
import { Level, languageToLevel } from "../data/levels";

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
  const router = useRouter();
  const query = router.query;
  const title = (query.title ?? "") as unknown as string;
  const lang = (query.lang ?? "") as unknown as Language;
  const level = (query.level ?? "") as unknown as Level;
  const filteredBooks = books
    .filter((book) => {
      if (!title) return true;
      return book.title.toLowerCase().includes(title.toLowerCase());
    })
    .filter((book) => {
      if (!lang) return true;
      return book.lang === lang;
    })
    .filter((book) => {
      if (!level) return true;
      return book.level === level;
    });

  console.log(languageToLevel(lang));

  return (
    <main>
      <Container maxW="6xl">
        <Flex pt="10" gridGap="5" flexDirection={["column", "column", "row"]}>
          <Box flex="1">
            <Input
              placeholder="Kitab axtar"
              value={title}
              onChange={(e) => {
                router.push({
                  query: { ...query, title: e.currentTarget.value },
                });
              }}
            />
          </Box>

          <Box w={["auto", "auto", "200px"]}>
            <Select
              placeholder="Dili seçin"
              value={lang}
              onChange={(e) => {
                router.push({
                  query: { ...query, lang: e.currentTarget.value },
                });
              }}
            >
              {Languages.map((lng) => {
                return (
                  <option key={lng} value={lng}>
                    {lng}
                  </option>
                );
              })}
            </Select>
          </Box>

          <Box w={["auto", "auto", "200px"]}>
            <Select
              placeholder="Səviyyəni seçin"
              value={level}
              disabled={!lang}
              onChange={(e) => {
                router.push({
                  query: { ...query, level: e.currentTarget.value },
                });
              }}
            >
              {languageToLevel(lang)?.map((lvl) => {
                return (
                  <option key={lvl} value={lvl}>
                    {lvl}
                  </option>
                );
              })}
            </Select>
          </Box>
        </Flex>

        <SimpleGrid columns={[2, 3, 4, 5]} spacing="40px" py="10">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => {
              return <BookCard key={book.id} book={book} />;
            })
          ) : (
            <div>Empty</div>
          )}
        </SimpleGrid>
      </Container>
    </main>
  );
}
