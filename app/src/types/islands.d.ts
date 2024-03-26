type IslandsProps = {
  id: number,
  name: string,
  locales: LocaleObject,
}

type LocaleObject = {
  [key: string]: string;
};