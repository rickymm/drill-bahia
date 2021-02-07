import React from "react";
import HeadN from "next/head";

const Head = () => {
  return (
    <HeadN>
      <title>Drill Bahia Perfuraçōes</title>
      <meta
        name="description"
        content="Empresa especializada em furo direcional MND."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <link rel="shortcut icon" href="/image/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
    </HeadN>
  );
};

export default Head;
