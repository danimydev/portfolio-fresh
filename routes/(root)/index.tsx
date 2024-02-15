import { Handlers, PageProps } from "$fresh/server.ts";

import { Project } from "../../components/project.tsx";
import { Position } from "../../components/position.tsx";

import { fetchRepositories, Repository, User } from "../../utils/github.ts";
import { fetchUser } from "../../utils/github.ts";
import { getDate } from "../../utils/format-date.ts";
import { POSITIONS } from "../../utils/data.ts";
import { SectionTitle } from "../../components/section-title.tsx";
import { Social } from "../../components/social.tsx";

export const handler: Handlers<{ repositories: Repository[]; user: User }> = {
  async GET(_req, ctx) {
    const repositories = await fetchRepositories();
    const user = await fetchUser();
    return ctx.render({
      repositories,
      user,
    });
  },
};

export default function HomePage(
  {
    data: {
      repositories,
      user,
    },
  }: PageProps<{ repositories: Repository[]; user: User }>,
) {
  const { month, year } = getDate();

  return (
    <div class="space-y-20">
      <div class="space-y-5">
        <SectionTitle title="About" />
        <div class="space-y-4">
          <p>
            Hey, I'm Daniel Madrid, a Software Engineer who loves coding. I use
            tools like Node.js, React, TypeScript, SQL, and NoSQL to build
            backend and frontend services
          </p>
          <p>
            Every day, I face coding challenges, but I enjoy solving problems
            and turning{" "}
            <b>obstacles into opportunities</b>. Whether it's figuring out
            Node.js or working on user interfaces with React, I like the
            excitement of it all.
          </p>
          <p>
            In the ever-changing tech world, I don't just write code; I create
            {" "}
            <b>practical software solutions</b>. Each project adds a new chapter
            to my journey, showcasing the results of hard work and a passion for
            coding.
          </p>
        </div>
        <div class="p-4 border">
          <div className="space-x-2">
            <span>
              📍
            </span>
            <span class="text-sm text-[darkgray]">
              {`${month.toUpperCase()}, ${year}`}
            </span>
          </div>
          <div class="flex items-center pl-7">
            {user.location || "Barranquilla, Atlantico, Colombia"}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg"
              alt="colombia flag"
              class="w-4 h-3 ml-2 rounded"
            />
          </div>
        </div>
      </div>

      <div class="space-y-5">
        <SectionTitle title="Experience" />
        {POSITIONS.map((position, index) => (
          <Position
            role={position.role}
            company={position.company}
            from={position.from}
            to={position.to}
            key={index}
            description={position.description}
          />
        ))}
      </div>

      <div class="space-y-5">
        <SectionTitle title="Projects" />
        {repositories.map((repository, index) => (
          <Project
            title={repository.name}
            url={repository.html_url}
            description={repository.description}
            language={repository.language}
            createdAt={repository.created_at}
            updatedAt={repository.updated_at}
            key={index}
          />
        ))}
      </div>

      <div class="space-y-5">
        <SectionTitle title="Contact" />
        <div>
          Email me{" "}
          <a className="text-blue-500" href="mailto:danimydev@gmail.com">
            here
          </a>
        </div>
        <div>
          You can found me on social media also...
        </div>
        <div>
          <Social />
        </div>
      </div>
    </div>
  );
}
