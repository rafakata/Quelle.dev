export function assetUrl(path: string): string {
  const normalizedPath = path.replace(/^\//, '').replace(/^public\//, '');
  return `${import.meta.env.BASE_URL}${normalizedPath}`;
}