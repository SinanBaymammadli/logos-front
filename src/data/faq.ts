import redaxios from "redaxios";
import { BASE_URL } from "./core";

export interface Faq {
  id: number;
  question: string;
  answer: string;
}

export async function getFaqs(): Promise<Faq[]> {
  const res = await redaxios.get<any[]>(`${BASE_URL}/faqs`);
  return res.data;
}
