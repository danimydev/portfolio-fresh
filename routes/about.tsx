import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";

const TITLE = "@danimydev";
const DESCRIPTION =
  "Daniel Madrid portfolio website built with Fresh JS / Deno";

export default function Home(props: PageProps) {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={props.url.href} />
      </Head>

      <body class="max-w-xl mx-auto font-mono">
        <Header active="/about"></Header>
        <Footer></Footer>
      </body>
    </>
  );
}
