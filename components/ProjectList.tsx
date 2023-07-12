import { Repository } from "../github/types.ts";
import ProjectListItem from "./ProjectListItem.tsx";

export default function ProjectList(props: { repos: Repository[] }) {
  const listItems = props.repos.map((repo) => (
    <ProjectListItem key={repo.id} repo={repo} />
  ));
  return (
    <div class="my-6">
      <h3 class="font-bold">Projects</h3>
      <ul>{listItems}</ul>
    </div>
  );
}
