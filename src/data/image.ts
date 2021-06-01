import { BASE_URL } from "./core";

export interface Image {
  id: number;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: {
    thumbnail: {
      ext: string;
      mime: string;
      width: number;
      height: number;
      size: number;
      url: string;
    };
  };
  ext: string;
  mime: string;
  size: number;
  url: string;
}

export function getFileUrl(url: string) {
  return `${BASE_URL}${url}`;
}
