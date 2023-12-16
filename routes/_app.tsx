import { PageProps } from "$fresh/server.ts";

export default function App({ Component }: PageProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Daniel Madrid portfolio website." />
        <link rel="stylesheet" href="cursor.css" />
        <title>danimydev</title>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
