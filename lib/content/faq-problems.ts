import type { LongArticle } from "./types";
import { ARTICLE as black_screen } from "./faq-black-screen";
import { ARTICLE as login } from "./faq-login";
import { ARTICLE as dns } from "./faq-dns";
import { ARTICLE as wifi_5ghz } from "./faq-wifi-5ghz";
import { ARTICLE as sideload } from "./faq-sideload";
import { ARTICLE as buffering } from "./faq-buffering";

export const FAQ_ARTICLES: LongArticle[] = [black_screen, login, dns, wifi_5ghz, sideload, buffering];

export function faqBySlug(slug: string) {
  return FAQ_ARTICLES.find((a) => a.slug === slug);
}
