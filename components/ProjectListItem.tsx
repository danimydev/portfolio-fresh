import { GitHubRepo } from "../github/interfaces.tsx";

export default function ProjectListItem(props: { repo: GitHubRepo }) {
  return (
    <div class="md:container my-2">
      <div>
        <span class="text-underline">{props.repo.name}:</span>{" "}
        <span>{props.repo.description}</span>
        <div>
          <span class="text-xs bg-black text-white px-2 py-1 rounded">
            {props.repo.language}
          </span>
        </div>
      </div>
    </div>
  );
}
