import type { MetadataRoute } from "next";
export default function sitemap():MetadataRoute.Sitemap{const b=process.env.NEXT_PUBLIC_SITE_URL??"https://www.dx-solutions.co.kr";return[{url:b,changeFrequency:"monthly",priority:1}]}
