import redaxios from "redaxios";
import { BASE_URL } from "./core";

export interface Author {
  id: number;
  name: string;
}

export async function getAuthors(): Promise<Author[]> {
  const res = await redaxios.get<any[]>(`${BASE_URL}/authors`);
  return res.data;
}
