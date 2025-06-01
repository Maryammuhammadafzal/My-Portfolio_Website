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

export const metadata = {
  title: "Portfolio | Mern Stack Developer",
  description: "Showcasing my skills and projects as a mern stack developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${monaSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
