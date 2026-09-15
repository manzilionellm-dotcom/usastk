import type { LongArticle } from "./types";
import { ARTICLE as new_york } from "./city-new-york";
import { ARTICLE as houston } from "./city-houston";
import { ARTICLE as los_angeles } from "./city-los-angeles";
import { ARTICLE as miami } from "./city-miami";
import { ARTICLE as chicago } from "./city-chicago";

export const CITY_ARTICLES: LongArticle[] = [new_york, houston, los_angeles, miami, chicago];

export function cityArticleBySlug(slug: string) {
  return CITY_ARTICLES.find((a) => a.slug === slug);
}
