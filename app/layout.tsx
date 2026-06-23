import type { Metadata, Viewport } from "next";
import "@fontsource/pretendard/400.css";
import "@fontsource/pretendard/500.css";
import "@fontsource/pretendard/600.css";
import "@fontsource/pretendard/700.css";
import "./globals.css";

const base=process.env.NEXT_PUBLIC_SITE_URL??"https://www.dx-solutions.co.kr";
export const metadata:Metadata={
  metadataBase:new URL(base),
  title:"DX Solutions | Manufacturing AI in Operation",
  description:"DX Solutions connects manufacturing data, vision intelligence, physical AI, and AI agents through M.O.D.E. and A.V.I.S.",
  keywords:["manufacturing AI","physical AI","AI agents","predictive maintenance","vision inspection"],
  alternates:{canonical:"/"},
  openGraph:{type:"website",url:"/",siteName:"DX Solutions",title:"DX Solutions | Manufacturing AI in Operation",description:"AI integrated control and manufacturing agent services for real factory operations.",images:[{url:"/media/hero/factory.webp",width:1920,height:1047,alt:"DX Solutions manufacturing AI environment"}]},
  twitter:{card:"summary_large_image",title:"DX Solutions | Manufacturing AI in Operation",description:"AI integrated control and manufacturing agent services for real factory operations.",images:["/media/hero/factory.webp"]},
  icons:{icon:"/icon.svg"},
};
export const viewport:Viewport={width:"device-width",initialScale:1,maximumScale:5,themeColor:"#ffffff",colorScheme:"light"};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
