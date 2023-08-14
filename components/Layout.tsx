import React from "react";
import Head from "next/head";
import { roboto, rubik, sulphurPoint } from "../fonts/font";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${roboto.variable} ${rubik.className} ${sulphurPoint.variable}`}
    >
      <Head>
        <title>Langchain app</title>
      </Head>
      <div>Navbar</div>
      <main>{children}</main>
    </div>
  );
}
