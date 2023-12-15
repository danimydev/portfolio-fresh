import { Project } from "../../components/project.tsx";
import { Position } from "../../components/position.tsx";

import { fetchRepositories } from "../../utils/github.ts";
import { fetchUser } from "../../utils/github.ts";
import { getDate } from "../../utils/format-date.ts";
import { POSITIONS } from "../../utils/data.ts";

export default async function HomePage() {
  const repositories = await fetchRepositories();
  const user = await fetchUser();
  const { month, year } = getDate();

  return (
    <div class="space-y-20">
      <div class="space-y-5">
        <div class="font-bold text-lg sticky top-0 bg-white py-4">
          About
        </div>
        <div class="my-4 space-y-4">
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
          <div>
            📍<span class="text-gray-500">{`${month}, ${year}`}</span>
          </div>
          <div class="flex items-center pl-5">
            {user.location || "Barranquilla, Atlantico, Colombia"}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg"
              alt="colombia flag"
              class="w-4 h-3 ml-2 rounded"
            />
          </div>
        </div>
      </div>

      <div class="space-y-6">
        <div class="font-bold text-lg sticky top-0 bg-white py-4">
          Experience
        </div>
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
        <div class="font-bold text-lg sticky top-0 bg-white py-4">
          Projects
        </div>
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
    </div>
  );
}
