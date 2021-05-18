import redaxios from "redaxios";
import { BASE_URL } from "./core";

export interface Book {
  id: number;
  title: string;
  price: number;
  description: string;
}

export async function getAllBooks(): Promise<Book[]> {
  const res = await redaxios.get<any[]>(`${BASE_URL}/books`);
  return res.data;
}
