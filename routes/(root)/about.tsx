import { PageProps } from "$fresh/server.ts";

import { fetchUser } from "../../utils/github.ts";
import { getDate } from "../../utils/format-date.ts";

export default async function AboutPage(props: PageProps) {
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
    <div class="space-y-10">
      <div class="space-y-5">
        <h1 class=" font-bold text-lg">
          About
        </h1>
        <div class=" my-4">
          <p class="my-3">Hey👋,</p>
          <p class="my-3">I am Daniel Madrid,</p>
          <p class="my-3">
            I was born in Colombia, I studied System Engineer at Universidad del
            Norte in Barranquilla. Currently I work at CI&T as a{" "}
            <strong class="italic">Backend Developer</strong>, I am part of a
            team which builds digital products and also maintain multiple IT
            services!
          </p>
        </div>
      </div>
      <div class="flex border rounded-lg shadow px-5 py-4 pb-5 space-y-4  text-sm">
        <div>
          <p>
            <span>
              📍
            </span>
            <span class="opacity-50">
              {`${month}, ${year}`}
            </span>
          </p>
          <p class="flex items-center pl-5">
            {user.location || "Barranquilla, Atlantico, Colombia"}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg"
              alt="colombia flag"
              class="w-4 h-3 ml-2 rounded"
            />
          </p>
        </div>
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
                    class="opacity-50 hover:opacity-100"
                  >
                    <i class={`${"fa-solid fa-link fa-2xs"}`}></i>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
