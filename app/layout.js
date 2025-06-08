import {  Mona_Sans , SUSE } from "next/font/google";
import "./globals.css";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
  weight: [ '200', '300', '400','500','600','700','800','900']
});
const suse = SUSE({
  variable: "--font-suse",
  subsets: ["latin"],
  weight: [ '400']
});

// export const metadata = {
//   title: "Portfolio | Mern Stack Developer",
//   description: "Showcasing my skills and projects as a mern stack developer",
// };

export const metadata = {
  title: "Full Stack Dev Maryam Afzal",
  description:
    "Hi, I'm a full-stack developer with an engineering background, specializing in scalable and efficient solutions for both team and individual projects.",
  openGraph: {
    title: "Full Stack Dev Maryam Afzal",
    description:
      "Hi, I'm a full-stack developer with an engineering background, specializing in scalable and efficient solutions for both team and individual projects.",
    url: "https://my-portfolio-website-two-psi.vercel.app/", 
    type: "website",
    images: [
      {
        url: "images/full_stack_dev_maryam_afzal.png", // Full URL required
        width: 1200,
        height: 630,
        alt: "Full Stack Dev Maryam Afzal",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/icons/favicon.svg"></link>
      </head>
      <body className={`${monaSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
