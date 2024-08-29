import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "7ei8griz",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-03-07",
});

const imgBuilder = ImageUrlBuilder(client);

export function urlFor(source) {
  return imgBuilder.image(source);
}
