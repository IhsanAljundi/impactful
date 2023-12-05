export const PUBLIC_URLS = [
  /^\/$/,
  /^\/login$/,
  /^\/register$/,
  /^\/feeds$/,
  /^\/profile\/[\w-]+$/,
];

export const isPublicUrl = (url) =>
  PUBLIC_URLS.some((regex) => regex.test(url));
