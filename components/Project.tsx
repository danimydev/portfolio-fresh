import { LANGUAGE_CLASSES } from "../github/data.ts";
import { Repository } from "../github/types.ts";
import { getDate } from "../utils/date.ts";

export default function Project(props: { repository: Repository }) {
  function getFormattedDate(
    { day, month, year }: { day: string; month: string; year: number },
  ) {
    return `${day}, ${month} of ${year}`;
  }

  return (
    <div class="p-5 border my-4 ">
      <a
        href={props.repository.html_url}
        target="_blank"
        class="text-underline"
      >
        {props.repository.name}
      </a>

      <p>{props.repository.description}</p>

      <div class="opacity-60 flex items-center text-xs my-3">
        <div
          class={`w-3 h-3 mr-2 rounded ${
            LANGUAGE_CLASSES.get(
              String(props.repository.language || "Other").toLowerCase(),
            )
          }`}
        >
        </div>
        <span>
          {props.repository.language || "Other"}
        </span>
      </div>

      <div class="text-xs ">
        <p>
          <strong class="mr-2">Created At:</strong>
          {getFormattedDate(getDate(props.repository.created_at))}
        </p>
        <p>
          <strong class="mr-2">Last Update At:</strong>
          {getFormattedDate(getDate(props.repository.updated_at))}
        </p>
      </div>
    </div>
  );
}
