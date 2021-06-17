import redaxios from "redaxios";
import { BASE_URL } from "./core";
import { Image } from "./image";

export interface Post {
  id: number;
  cover_image: Image;
  title: string;
  slug: string;
  content: string;
  published_at: string;
}

export async function getAllPosts(): Promise<Post[]> {
  const res = await redaxios.get<any[]>(`${BASE_URL}/posts`);
  return res.data;
}

export async function getPost(slug: string): Promise<Post> {
  const res = await redaxios.get<any>(`${BASE_URL}/posts?slug=${slug}`);
  return res.data[0];
}
