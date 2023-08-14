import { Sulphur_Point, Roboto, Rubik } from "next/font/google";
// import localFont from "next/font/local";

//SET UP SULPHURE POINT GOOGLE FONT
const sulphurPoint = Sulphur_Point({
  weight: ["300", "400", "700"],
  style: "normal",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sulphur-point",
});

//SET UP ROBOTO GOOGLE FONT
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

//SET UP ROBOTO GOOGLE FONT
const rubik = Rubik({
  weight: ["300", "400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
});

//LOCAL FONT
// const myFont = localFont({
//   src: "./my-font.woff2",
//   display: "swap",
//   variable: "--font-local",
// });

//LOCAL FONT RELYING ON MULTIPLE FILES
// const roboto = localFont({
//   src: [
//     {
//       path: './Roboto-Regular.woff2',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: './Roboto-Italic.woff2',
//       weight: '400',
//       style: 'italic',
//     },
//     {
//       path: './Roboto-Bold.woff2',
//       weight: '700',
//       style: 'normal',
//     },
//     {
//       path: './Roboto-BoldItalic.woff2',
//       weight: '700',
//       style: 'italic',
//     },
//   ],
// });
export { sulphurPoint, roboto, rubik };
