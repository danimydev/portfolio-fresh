import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import Location from "../components/Location.tsx";

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
        <div class="pb-4">
          <h3 class="font-bold">About Me</h3>
          <p class="italic my-4">
            Hey👋,
            <br />
            I was born in Colombia, I studied System Engineer at Universidad del
            Norte in Barranquilla. Currently I work at CI&T as a{" "}
            <strong>Backend Developer</strong>, I am part of a team which builds
            digital products and also maintain multiple IT services!
          </p>
        </div>
        <Location></Location>
        <Footer></Footer>
      </body>
    </>
  );
}
