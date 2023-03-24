import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import { gitHubRepos } from "../github/data.tsx";
import ProjectList from "../components/ProjectList.tsx";

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
      </Head>

      <body class="md:container md:mx-auto">
        <Header active="/"></Header>
        <ProjectList repos={gitHubRepos}></ProjectList>
        <Footer></Footer>
      </body>
    </>
  );
}
