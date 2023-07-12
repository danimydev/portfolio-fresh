import { LANGUAGE_CLASSES } from "../github/data.ts";
import { Repository } from "../github/types.ts";

export default function ProjectListItem(props: { repo: Repository }) {
  return (
    <div class="md:container my-4">
      <div>
        <a href={props.repo.html_url} target="_blank" class="text-underline">
          {props.repo.name}:
        </a>{" "}
        <span>{props.repo.description}</span>
      </div>

      <div class="flex">
        <div
          class={`mr-2 px-2 py-2 rounded ${
            LANGUAGE_CLASSES.get(String(props.repo.language).toLowerCase())
          }`}
        >
        </div>
        <div class="text-xs">
          {props.repo.language}
        </div>
      </div>
    </div>
  );
}
