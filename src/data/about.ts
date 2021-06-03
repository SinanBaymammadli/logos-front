import redaxios from "redaxios";
import { BASE_URL } from "./core";

export interface About {
  description: string;
}

export async function getAbout(): Promise<About> {
  const res = await redaxios.get<any>(`${BASE_URL}/about`);
  return res.data;
}
