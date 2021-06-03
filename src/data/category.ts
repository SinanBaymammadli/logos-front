import redaxios from "redaxios";
import { BASE_URL } from "./core";

export interface Category {
  id: number;
  name: string;
}

export async function getCategories(): Promise<Category[]> {
  const res = await redaxios.get<any[]>(`${BASE_URL}/categories`);
  return res.data;
}
