import { PageProps } from "$fresh/server.ts";

import { Banner } from "../../components/banner.tsx";
import { FreshBadge } from "../../components/fresh-badge.tsx";
import { Social } from "../../components/social.tsx";

export default function Layout({ Component }: PageProps) {
  return (
    <div class="mx-auto space-y-20 px-8 py-20 max-w-2xl font-mono">
      <header class="space-y-10">
        <Banner />
        <Social />
      </header>
      <main>
        <Component />
      </main>
      <footer class="text-center">
        <FreshBadge />
      </footer>
    </div>
  );
}
