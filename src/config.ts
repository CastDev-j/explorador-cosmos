interface Route {
  label: string;
  path: string;
}

export const routes: Route[] = [
  { label: "Inicio", path: "/" },
  { label: "APOD", path: "/apod" },
  { label: "NASA Image and Video Library", path: "/nasa" },
  { label: "Mars Rover Photos", path: "/mars" },
  { label: "EONET", path: "/eonet" },
];

// Centralized app metadata
export const authors = [
  "Andrés Castillo",
  "Juan Pérez",
  "María López",
  "Luis García",
];
export const githubRepo = "https://github.com/CastDev-j/explorador-cosmos";
