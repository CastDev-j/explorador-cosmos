interface Route {
  label: string;
  path: string;
}

export const routes: Route[] = [
  { label: "componetes", path: "/components" },
  { label: "Inicio", path: "/" },
  { label: "APOD", path: "/apod" },
  { label: "NASA Image and Video Library", path: "/nasa" },
  { label: "Mars Rover Photos", path: "/mars" },
  { label: "EONET", path: "/eonet" },
];

export const authors = [
  "Andrés Castillo Jiménez",
  "Sugey Gutiérrez Calero",
  "Angel González Mejia",
  "Gibran Aron Herrera Herrera",
];
export const githubRepo = "https://github.com/CastDev-j/ecos-estelares";
export const SITE_NAME = "Ecos Estelares";

export const itemsPerPageOptions = {
  nasa: 12,
  mars: 12,
  eonet: 12,
  apod: 1,
};
