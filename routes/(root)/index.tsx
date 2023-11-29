import { PageProps } from "$fresh/server.ts";
import IconLink from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/link.tsx";

import { fetchRepositories } from "../../utils/github.ts";
import { getDate } from "../../utils/format-date.ts";
import { fetchUser } from "../../utils/github.ts";

export default async function HomePage(_props: PageProps) {
  const repositories = await fetchRepositories();

  const languageColor = new Map([
    ["TypeScript", "blue"],
    ["C", "gray"],
    ["Python", "green"],
    ["JavaScript", "yellow"],
    ["Rust", "red"],
    ["Other", "slate"],
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

  const user = await fetchUser();

  const { month, year } = getDate();

  const positions = [
    {
      title: "Software Enginner",
      company: {
        name: "CI&T",
        url: "https://ciandt.com/us/en-us",
      },
    },
    {
      title: "Software Enginner",
      company: {
        name: "Globant",
        url: "https://www.globant.com/",
      },
    },
    {
      title: "Node JS Developer",
      company: {
        name: "Zemoga",
        url: "https://www.zemoga.com/",
      },
    },
    {
      title: "Web Developer",
      company: {
        name: "Uninorte",
        url: "https://www.uninorte.edu.co/",
      },
    },
  ];

  return (
    <>
      <div class="space-y-10">
        <div class="space-y-5">
          <div class=" font-bold text-lg">
            About Me
          </div>
          <div class=" my-4">
            <p class="my-3">Hey👋,</p>
            <p class="my-3">I am Daniel Madrid,</p>
            <p class="my-3">
              I was born in Colombia, I studied System Engineer at Universidad
              del Norte in Barranquilla. Currently I work at CI&T as a{" "}
              <strong class="italic">Backend Developer</strong>, I am part of a
              team which builds digital products and also maintain multiple IT
              services!
            </p>
          </div>
          <div class="border flex justify-between items-center">
            <div class="p-4">
              <div>
                📍<span class="text-gray-500">{`${month}, ${year}`}</span>
              </div>
              <div class="flex items-center pl-5">
                {user.location || "Barranquilla, Atlantico, Colombia"}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg"
                  alt="colombia flag"
                  class="w-4 h-3 ml-2 rounded"
                />
              </div>
            </div>
            <div>
              <iframe
                src="https://maps.google.com/maps?q=barranquilla&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                frameborder="0"
                scrolling="no"
              >
              </iframe>
            </div>
          </div>
        </div>

        <div class="space-y-5">
          <h1 class=" font-bold text-lg">
            Projects
          </h1>
          {repositories.map((repository) => {
            const badgeColor = languageColor.get(repository.language) ||
              defaultLanguageColor;
            return (
              <div class="border p-4 space-y-4">
                <div>
                  <div class="font-bold">
                    <a
                      href={repository.html_url}
                      target="blank"
                    >
                      {repository.name}
                    </a>
                  </div>
                  <div class="text-sm">
                    {repository.description}
                  </div>
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
                <div>
                  <span
                    class={`min-w-[80px] justify-center inline-flex items-center rounded-md bg-${badgeColor}-50 py-1 text-xs font-medium text-${badgeColor}-600 border border-${badgeColor}-500`}
                  >
                    {repository.language || "Other"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div class="space-y-5">
          <div class=" font-bold text-lg">
            Experience
          </div>
          <div>
            <table class="text-left table-auto border-collapse w-full">
              <thead>
                <tr>
                  <th class="font-normal opacity-50 py-3">Company</th>
                  <th class="font-normal opacity-50 py-3">Role/Position</th>
                  <th class="font-normal opacity-50 py-3">Website</th>
                </tr>
              </thead>
              <tbody>
                {positions.map((p) => (
                  <tr class="border-t-1">
                    <td class="py-3">{p.company.name}</td>
                    <td class="py-3">{p.title}</td>
                    <td class="py-3">
                      <a
                        href={p.company.url}
                        target="_blank"
                      >
                        <IconLink />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
