import { AppProps } from "$fresh/server.ts";

export default function App({ Component, url }: AppProps) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          src="https://kit.fontawesome.com/4eca672d57.js"
          crossOrigin="anonymous"
        >
        </script>
        <title>danimydev</title>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
