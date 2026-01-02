import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Meji Cash",
    short_name: "MejiCash",
    description: "Plataforma demo con créditos virtuales",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#7a2cff",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

