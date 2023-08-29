import type { Locale } from './i18n-config';
import { DictionaryItem } from './types/dictionary'; // Import the dictionary interface

const dictionaries: Record<Locale, () => Promise<DictionaryItem>> = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  hi: () => import('./dictionaries/hi.json').then((module) => module.default),
  ar: () => import('./dictionaries/ar.json').then((module) => module.default),
  ur: () => import('./dictionaries/ur.json').then((module) => module.default),
  ch: () => import('./dictionaries/ch.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en();