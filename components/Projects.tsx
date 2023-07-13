import { Repository } from "../github/types.ts";
import Project from "./Project.tsx";

export default function Projects(props: { repositories: Repository[] }) {
  const projects = props.repositories.map((repository) => (
    <Project key={repository.id} repository={repository} />
  ));
  return (
    <div class="my-6">
      <h3 class="font-bold">Projects</h3>
      <div>{projects}</div>
    </div>
  );
}
