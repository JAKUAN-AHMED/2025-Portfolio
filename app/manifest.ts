import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jakuan Ahmed - Full Stack Developer",
    short_name: "Jakuan Ahmed",
    description:
      "Junior FullStack Developer | Educator | Problem Solver - Portfolio showcasing modern web development skills",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
