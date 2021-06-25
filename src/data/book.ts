import redaxios from "redaxios";
import { BASE_URL } from "./core";
import { Language } from "./languages";
import { Level } from "./levels";
import { Image } from "./image";
import { Author } from "./author";
import { Category } from "./category";

export interface Book {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  cover_image: Image;
  detail_images: Array<Image>;
  isbn: string;
  level: Level;
  lang: Language;
  author: Author;
  categories: Array<Category>;
}

export async function getAllBooks(): Promise<Book[]> {
  const res = await redaxios.get<any[]>(`${BASE_URL}/books`);
  return res.data;
}

export async function getBook(slug: string): Promise<Book> {
  const res = await redaxios.get<any>(`${BASE_URL}/books?slug=${slug}`);
  return res.data[0];
}

export async function getRelatedBook(book: Book): Promise<Book[]> {
  const { lang, level } = book;
  const res = await redaxios.get<any>(`${BASE_URL}/books?lang=${encodeURIComponent(lang)}`);
  const books: Book[] = res.data;

  if (books.length <= 5) {
    return books;
  }

  return books.filter((book) => book.level === level).splice(0, 6);
}
