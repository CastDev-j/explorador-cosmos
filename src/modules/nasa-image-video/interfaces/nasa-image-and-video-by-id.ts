export interface NASAImageAndVideoByID {
  collection: Collection;
}

export interface Collection {
  version: string;
  href: string;
  items: Item[];
  metadata: Metadata;
}

export interface Item {
  href: string;
  data: Datum[];
  links: Link[];
}

export interface Datum {
  center: string;
  date_created: Date;
  description: string;
  keywords: string[];
  media_type: string;
  nasa_id: string;
  title: string;
}

export interface Link {
  href: string;
  rel: string;
  render?: string;
  width?: number;
  size?: number;
  height?: number;
}

export interface Metadata {
  total_hits: number;
}
