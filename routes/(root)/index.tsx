import { PageProps } from "$fresh/server.ts";

import { fetchRepositories } from "@/utils/github.ts";

import { CardsList } from "@/components/cards-list.tsx";

export default async function HomePage(_props: PageProps) {
  const repositories = await fetchRepositories();
  return (
    <div class="space-y-10">
      <CardsList
        projects={repositories}
      />
    </div>
  );
}
