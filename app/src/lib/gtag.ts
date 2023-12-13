import { GA_ID } from "@/constant/gtag";

export const pageview = (path: string) => {
  window.gtag("config", GA_ID, {
    page_path: path,
  });
};