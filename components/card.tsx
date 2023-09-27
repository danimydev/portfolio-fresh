import { defaultLanguageColor, languageColor } from "../utils/github.ts";

import { getDate } from "../utils/format-date.ts";

export const Card = ({
  title,
  description,
  language,
  link,
  createdAt,
  updatedAt,
}: {
  title: string;
  description: string;
  language: string;
  link: string;
  createdAt: string;
  updatedAt: string;
}) => {
  const badgeColor = languageColor.get(language) || defaultLanguageColor;
  const getFormattedDate = (
    input: { day: string; month: string; year: number },
  ) => {
    return `${input.day}, ${input.month} of ${input.year}`;
  };
  return (
    <div class="border rounded-lg shadow px-5 py-4 pb-5 space-y-4">
      <div>
        <div class="text-lg font-bold">
          <a
            href={link}
            target="blank"
          >
            {title}
          </a>
        </div>
        <div class="text-sm opacity-70">
          {description}
        </div>
      </div>
      <div>
        <span
          class={`min-w-[80px] justify-center inline-flex items-center rounded-md bg-${badgeColor}-50 py-1 text-xs font-medium text-${badgeColor}-600 border border-${badgeColor}-500`}
        >
          {language || "Other"}
        </span>
      </div>
      <div class="text-xs ">
        <div>
          <span class="font-bold">Created at:</span>{" "}
          {getFormattedDate(getDate(createdAt))}
        </div>
        <div>
          <span class="font-bold">Updated at:</span>{" "}
          {getFormattedDate(getDate(updatedAt))}
        </div>
      </div>
    </div>
  );
};
