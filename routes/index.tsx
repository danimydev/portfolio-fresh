import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import Header from "../components/Header.tsx";
import Social from "../components/Social.tsx";
import Projects from "../components/Projects.tsx";
import Footer from "../components/Footer.tsx";
import { repositories } from "../github/data.ts";

const TITLE = "@danimydev";
const DESCRIPTION =
  "Daniel Madrid portfolio website built with Fresh JS / Deno";

export default function Home(props: PageProps<unknown>) {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={props.url.href} />
        <script
          src="https://kit.fontawesome.com/4eca672d57.js"
          crossOrigin="anonymous"
        >
        </script>
      </Head>

      <body class="max-w-xl mx-auto font-mono px-6">
        <Header active="/"></Header>
        <Social></Social>
        <Projects repositories={repositories}></Projects>
        <Footer></Footer>
      </body>
    </>
  );
}
