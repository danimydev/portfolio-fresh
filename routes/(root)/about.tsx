import { PageProps } from "$fresh/server.ts";

import { Biography } from "../..//components/biography.tsx";
import { Location } from "../..//components/location.tsx";
import { Experience } from "../..//components/experience.tsx";

import { fetchUser } from "../..//utils/github.ts";

export default async function AboutPage(props: PageProps) {
  const user = await fetchUser();
  return (
    <div class="space-y-10">
      <Biography />
      <Location user={user} />
      <Experience />
    </div>
  );
}
