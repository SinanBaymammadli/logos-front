import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
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
  const book = await getBook(params?.id?.toString() ?? "1");

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

  const [selectedImgId, setSelectedImgId] = React.useState(0);
  const selectedImg = book.detail_images.find((img) => img.id === selectedImgId);

  return (
    <Container maxW="6xl" py="10">
      <Flex flexDirection={["column", "column", "row"]}>
        <Flex pb={["5", "5", 0]} direction="column" style={{ gap: 24 }}>
          <Flex justifyContent="center" bg="black">
            <img
              src={getFileUrl(book.cover_image.url)}
              width={book.cover_image.width}
              height={book.cover_image.height}
              style={{ aspectRatio: "0.649", minWidth: 288, maxWidth: 320 }}
              loading="lazy"
            />
          </Flex>
          {book.detail_images.length > 0 ? (
            <Flex style={{ gap: 4 }}>
              {book.detail_images.map((img) => {
                return (
                  <button key={img.id} onClick={() => setSelectedImgId(img.id)}>
                    <img
                      src={getFileUrl(img.formats.thumbnail.url)}
                      width={img.formats.thumbnail.width}
                      height={img.formats.thumbnail.height}
                      loading="lazy"
                      style={{ maxWidth: 100 }}
                    />
                  </button>
                );
              })}
            </Flex>
          ) : null}
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

      <Modal onClose={() => setSelectedImgId(0)} size="3xl" isOpen={selectedImgId !== 0}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody p="0">
            <ModalCloseButton />
            {selectedImg ? (
              <img
                src={getFileUrl(selectedImg?.url)}
                width={selectedImg?.width}
                height={selectedImg?.height}
                loading="lazy"
              />
            ) : null}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
}
