import type { favoritesTable } from "@/db/schema";
import type { InferInsertModel, InferSelectModel } from "drizzle-orm";

export type Favorite = InferSelectModel<typeof favoritesTable>;
export type NewFavorite = InferInsertModel<typeof favoritesTable>;

export interface APODReference {
  date: string;
}

export interface MarsRoverReference {
  rover: "curiosity" | "opportunity" | "spirit" | "perseverance";
  sol: number;
  camera: string;
  photoId: string;
}

export interface EONETReference {
  eventId: string;
}

export interface ImageLibraryReference {
  nasaId: string;
}

export type ReferenceData =
  | APODReference
  | MarsRoverReference
  | EONETReference
  | ImageLibraryReference;

export type APODFavorite = Favorite & {
  type: "apod";
  referenceData: APODReference;
};

export type MarsRoverFavorite = Favorite & {
  type: "mars_rover";
  referenceData: MarsRoverReference;
};

export type EONETFavorite = Favorite & {
  type: "eonet";
  referenceData: EONETReference;
};

export type ImageLibraryFavorite = Favorite & {
  type: "image_library";
  referenceData: ImageLibraryReference;
};

export type TypedFavorite =
  | APODFavorite
  | MarsRoverFavorite
  | EONETFavorite
  | ImageLibraryFavorite;
