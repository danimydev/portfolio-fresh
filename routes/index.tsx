import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import { GitHubRepo } from "../github/interfaces.tsx";
import { REPOS } from "../github/data.tsx";
import GitHubAPI from "../github/index.tsx";
import ProjectList from "../components/ProjectList.tsx";

const TITLE = "@danimydev";
const DESCRIPTION =
  "Daniel Madrid portfolio website built with Fresh JS / Deno";

export const handler: Handlers<GitHubRepo[]> = {
  async GET(_req, ctx) {
    const githubRepos = await GitHubAPI.getUserRepositories();
    if (!githubRepos.length) {
      return ctx.render(REPOS);
    }
    return ctx.render(githubRepos);
  },
};

export default function Home(props: PageProps<GitHubRepo[]>) {
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
        <ProjectList repos={props.data}></ProjectList>
        <Footer></Footer>
      </body>
    </>
  );
}
