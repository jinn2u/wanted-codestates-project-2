interface ParseQs {
  [x: string]: string | null;
}

export const parseQueryString = (url: string) =>
  url
    .substring(1)
    .split('&')
    .reduce((acc: ParseQs, cur) => {
      const [key, value] = cur.split('=');
      acc[key] = value;
      return acc;
    }, {});
