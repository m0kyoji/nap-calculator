import { GA_ID } from "@/constant/gtag";

export const pageview = (path: string) => {
  if ( !GA_ID ) return;
  window.gtag("config", GA_ID, {
    page_path: path,
  });
};