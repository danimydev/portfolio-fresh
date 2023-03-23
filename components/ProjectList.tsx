import { GitHubRepo } from "../github/interfaces.tsx";
import ProjectListItem from "./ProjectListItem.tsx";

export default function ProjectList(props: { repos: GitHubRepo[] }) {
  const listItems = props.repos.map((repo) => (
    <ProjectListItem key={repo.id} repo={repo} />
  ));
  return (
    <>
      <h3 class="font-bold">Projects</h3>
      <ul>{listItems}</ul>
    </>
  );
}
