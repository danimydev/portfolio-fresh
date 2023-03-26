import { LANGUAGE_CLASSES } from "../github/data.tsx";
import { GitHubRepo } from "../github/interfaces.tsx";

export default function ProjectListItem(props: { repo: GitHubRepo }) {
  return (
    <div class="md:container my-4">
      <div>
        <div>
          <a href={props.repo.html_url} target="_blank" class="text-underline">
            {props.repo.name}:
          </a>{" "}
          <span>{props.repo.description}</span>
        </div>

        <div class="flex">
          <div
            class={`mr-2 px-2 py-2 rounded ${
              LANGUAGE_CLASSES.get(props.repo.language.toLowerCase())
            }`}
          >
          </div>
          <div class="text-xs">
            {props.repo.language}
          </div>
        </div>
      </div>
    </div>
  );
}
