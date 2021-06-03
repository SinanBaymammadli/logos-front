import redaxios from "redaxios";
import { BASE_URL } from "./core";

export interface Post {
  id: number;
  title: string;
  content: string;
}

export async function getAllPosts(): Promise<Post[]> {
  const res = await redaxios.get<any[]>(`${BASE_URL}/posts`);
  return res.data;
}

export async function getPost(id: string): Promise<Post> {
  const res = await redaxios.get<any>(`${BASE_URL}/posts/${id}`);
  return res.data;
}
