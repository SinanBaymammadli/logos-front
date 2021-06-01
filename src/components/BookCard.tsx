import { Flex, Box } from "@chakra-ui/react";
import { Book } from "../data/book";
import { getFileUrl } from "../data/image";
import Link from "next/link";

interface RatingProps {
  rating: number;
  numReviews: number;
}

export function BookCard({ book }: { book: Book }) {
  return (
    <Link href={`/books/${book.id}`}>
      <a>
        <img src={getFileUrl(book.cover_image.formats.thumbnail.url)} width="100%" />

        <h3>{book.title}</h3>

        <Flex>
          <Box fontSize="lg">₼</Box>
          {book.price.toFixed(2)}
        </Flex>
      </a>
    </Link>
  );
}
