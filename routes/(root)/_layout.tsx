import { LayoutProps } from "$fresh/server.ts";

import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx";
import IconBrandLinkedin from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-linkedin.tsx";
import IconBrandMedium from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-medium.tsx";

export default function Layout({ Component }: LayoutProps) {
  return (
    <div class="layout mx-auto px-8 max-w-2xl space-y-20 py-[80px]">
      <header class="space-y-6">
        <div class="space-y-2">
          <div class="font-bold text-5xl">
            Daniel Madrid
          </div>
          <div class="text-xl">
            Software Engineer
          </div>
          <div class="max-w-[300px]">
            I build reliable backend services and accesible web apps.
          </div>
        </div>
        <div class="flex items-center space-x-2">
          <a
            href="https://www.github.com/danimydev"
            target="blank"
            aria-label="Visit GitHub danimydev profile"
          >
            <IconBrandGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/danimydev"
            target="blank"
            aria-label="Visit Linkedin danimydev profile"
          >
            <IconBrandLinkedin />
          </a>
          <a
            href="https://medium.com/@danimydev"
            target="blank"
            aria-label="Visit Medium danimydev profile"
          >
            <IconBrandMedium />
          </a>
        </div>
      </header>

      <main>
        <Component />
      </main>

      <footer class="text-center">
        <div>
          <a
            href="https://fresh.deno.dev"
            target="blank"
            aria-label="Visit fresh website"
          >
            <img
              className="mx-auto"
              src="https://fresh.deno.dev/fresh-badge.svg"
              alt="made with fresh badge"
              srcset=""
            />
          </a>
        </div>
      </footer>
    </div>
  );
}
