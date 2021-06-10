import { Book } from "../data/book";
import { getFileUrl } from "../data/image";
import Link from "next/link";
import React from "react";
import { Price } from "./Price";
import { Heading } from "@chakra-ui/layout";

export function BookCard({ book }: { book: Book }) {
  return (
    <Link href={`/books/${book.id}`}>
      <a>
        <img
          src={getFileUrl(book.cover_image.url)}
          width={book.cover_image.width}
          height={book.cover_image.height}
          style={{ aspectRatio: "0.649" }}
        />

        <Heading size="sm" fontWeight="normal" pt="2" pb="1">
          {book.title}
        </Heading>

        <Price amount={book.price} />
      </a>
    </Link>
  );
}
