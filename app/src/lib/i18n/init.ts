import { InitOptions } from "i18next";
import { ja } from '@/locales/ja/translation'
import { en } from '@/locales/en/translation'

export const i18nextInitOptions: InitOptions = {
  lng        : "ja",
  fallbackLng: "ja",
  resources  : {
    ja: ja,
    en: en,
  },
};