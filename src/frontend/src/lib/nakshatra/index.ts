import { nakshatras } from '@/data/nakshatras';

export function getNakshatraSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-');
}

export function getNakshatraBySlug(slug: string) {
  return nakshatras.find((n) => getNakshatraSlug(n.name) === slug);
}
