import type { LongArticle } from "./types";
import { ARTICLE as samsung } from "./setup-samsung";
import { ARTICLE as lg } from "./setup-lg";
import { ARTICLE as android } from "./setup-android";
import { ARTICLE as iphone } from "./setup-iphone";
import { ARTICLE as mag } from "./setup-mag";
import { ARTICLE as formuler } from "./setup-formuler";

export const SETUP_ARTICLES: LongArticle[] = [samsung, lg, android, iphone, mag, formuler];

export function setupBySlug(slug: string) {
  return SETUP_ARTICLES.find((a) => a.slug === slug);
}
