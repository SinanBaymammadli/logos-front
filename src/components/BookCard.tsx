import { Book } from "../data/book";
import { getFileUrl } from "../data/image";
import NextLink from "next/link";
import React from "react";
import { Price } from "./Price";
import { Heading, Link } from "@chakra-ui/react";

export function BookCard({ book }: { book: Book }) {
  return (
    <NextLink href={`/books/${book.slug}`} passHref>
      <Link>
        <img
          src={getFileUrl(book.cover_image.url)}
          width={book.cover_image.width}
          height={book.cover_image.height}
          style={{ aspectRatio: "0.649" }}
          loading="lazy"
        />

        <Heading size="sm" fontWeight="normal" pt="2" pb="1">
          {book.title}
        </Heading>

        <Price amount={book.price} />
      </Link>
    </NextLink>
  );
}
