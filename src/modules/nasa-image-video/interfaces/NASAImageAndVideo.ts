export interface NASAImageAndVideo {
  collection: Collection;
}

export interface Collection {
  version: string;
  href: string;
  items: Item[];
  metadata: Metadata;
  links: CollectionLink[];
}

export interface Item {
  href: string;
  data: Datum[];
  links?: ItemLink[];
}

export interface Datum {
  center: typeof Center;
  date_created: Date;
  description: string;
  keywords: string[];
  media_type: typeof MediaType;
  nasa_id: string;
  title: string;
  description_508?: string;
  secondary_creator?: string;
  location?: string;
  album?: string[];
  photographer?: string;
}

export const Center = {
  Gsfc: "GSFC",
  Hq: "HQ",
  Jpl: "JPL",
  Jsc: "JSC",
} as const;

export const MediaType = {
  Audio: "audio",
  Image: "image",
  Video: "video",
} as const;

export interface ItemLink {
  href: string;
  rel: string;
  render?: typeof MediaType;
  width?: number;
  size?: number;
  height?: number;
}

export const Rel = {
  Alternate: "alternate",
  Canonical: "canonical",
  Captions: "captions",
  Preview: "preview",
} as const;

export interface CollectionLink {
  rel: string;
  prompt: string;
  href: string;
}

export interface Metadata {
  total_hits: number;
}
