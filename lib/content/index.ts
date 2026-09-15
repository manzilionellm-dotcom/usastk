import type { LongArticle } from "./types";
import { SETUP_ARTICLES } from "./setup";
import { CITY_ARTICLES } from "./cities-long";
import { FAQ_ARTICLES } from "./faq-problems";
import { BLOG_ARTICLES } from "./blog-week";

export type { LongArticle } from "./types";
export { SETUP_ARTICLES, setupBySlug } from "./setup";
export { CITY_ARTICLES, cityArticleBySlug } from "./cities-long";
export { FAQ_ARTICLES, faqBySlug } from "./faq-problems";
export { BLOG_ARTICLES, blogBySlug } from "./blog-week";

export const ALL_ARTICLES: LongArticle[] = [
  ...SETUP_ARTICLES,
  ...CITY_ARTICLES,
  ...FAQ_ARTICLES,
  ...BLOG_ARTICLES,
];
