import React from "react";
import HeadN from "next/head";

const Head = () => {
  return (
    <HeadN>
      <title>Drill Bahia</title>
      <meta
        name="description"
        content="Empresa especializada em perfuraçōes MND."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
    </HeadN>
  );
};

export default Head;
