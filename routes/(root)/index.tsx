import { PageProps } from "$fresh/server.ts";

import { fetchRepositories } from "../../utils/github.ts";
import { getDate } from "../../utils/format-date.ts";

export default async function HomePage(_props: PageProps) {
  const repositories = await fetchRepositories();

  const languageColor = new Map([
    ["TypeScript", "blue"],
    ["C", "gray"],
    ["Python", "green"],
    ["JavaScript", "yellow"],
  ]);

  const defaultLanguageColor = "black";

  const getFormattedDate = (
    input: {
      day: string;
      month: string;
      year: number;
    },
  ) => {
    return `${input.day}, ${input.month} of ${input.year}`;
  };

  return (
    <div class="space-y-10">
      <div class="space-y-5">
        <h1 class=" font-bold text-lg">
          Projects
        </h1>
        {repositories.map((repository) => {
          const badgeColor = languageColor.get(repository.language) ||
            defaultLanguageColor;
          return (
            <div class="border rounded-lg shadow px-5 py-4 pb-5 space-y-4">
              <div>
                <div class="text-lg font-bold">
                  <a
                    href={repository.html_url}
                    target="blank"
                  >
                    {repository.name}
                  </a>
                </div>
                <div class="text-sm opacity-70">
                  {repository.description}
                </div>
              </div>
              <div>
                <span
                  class={`min-w-[80px] justify-center inline-flex items-center rounded-md bg-${badgeColor}-50 py-1 text-xs font-medium text-${badgeColor}-600 border border-${badgeColor}-500`}
                >
                  {repository.language || "Other"}
                </span>
              </div>
              <div class="text-xs ">
                <div>
                  <span class="font-bold">Created at:</span>{" "}
                  {getFormattedDate(getDate(repository.created_at))}
                </div>
                <div>
                  <span class="font-bold">Updated at:</span>{" "}
                  {getFormattedDate(getDate(repository.updated_at))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
