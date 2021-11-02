import React from "react";
import ReactDOMServer from "react-dom/server";

export function Page(props: { children: React.ReactElement; title: string }) {
  const content = ReactDOMServer.renderToString(props.children);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{props.title}</title>
        <meta
          name="description"
          content="This database website is an un-official list, guide and reference for the pets, food and stats from the game Super Auto Pets."
        />
        <meta name="author" content="Ben Coveney" />
        <link rel="icon" type="image/svg+xml" href="/assets/pet-fish.svg" />
        <link rel="stylesheet" href="/tailwind.css" />
      </head>
      <body className="bg-gray-800 text-white">
        <div
          id="react-root"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
        <script defer src="/bundle.js" />
      </body>
    </html>
  );
}
