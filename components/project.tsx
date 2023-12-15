import { getLanguageColor } from "../utils/get-language-color.ts";

type ProjectProps = {
  title: string;
  description: string;
  language: string;
  url: string;
  createdAt: string;
  updatedAt: string;
};

export const Project = ({
  title,
  description,
  language,
  url,
  createdAt,
  updatedAt,
}: ProjectProps) => {
  const badgeColor = getLanguageColor(language) || "black";

  return (
    <div class="border p-4 space-y-4">
      <div>
        <div class="font-bold">
          <a
            href={url}
            target="blank"
          >
            {title}
          </a>
        </div>
        <div class="text-sm">
          {description}
        </div>
      </div>
      <div class="text-xs ">
        <div>
          <span class="font-bold">Created at:</span> {createdAt}
        </div>
        <div>
          <span class="font-bold">Updated at:</span> {updatedAt}
        </div>
      </div>
      <div>
        <span
          class={`rounded-full py-1 px-4 text-xs bg-${badgeColor}-50 py-1 text-xs font-medium text-${badgeColor}-600`}
        >
          {language || "Other"}
        </span>
      </div>
    </div>
  );
};
