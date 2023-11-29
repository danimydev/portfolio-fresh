import { LayoutProps } from "$fresh/server.ts";

import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx";
import IconBrandLinkedin from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-linkedin.tsx";
import IconBrandMedium from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-medium.tsx";

export default function Layout({ Component }: LayoutProps) {
  return (
    <div class="space-y-10 py-12">
      <header class="flex flex-col items-center space-y-2">
        <div>
          <img
            src="/ghost_chibi.jpg"
            width="120"
            height="120"
            alt="simon riley from cod as chibi"
            draggable={false}
          />
        </div>
        <div class="text-center">
          <h1 class="font-bold text-2xl">
            Daniel Madrid
          </h1>
          <nav class="text-sm">
            <a
              href="mailto:danimydev@gmail.com"
              target="blank"
              aria-label="Send an email to danimydev@gmail.com"
            >
              danimydev@gmail.com
            </a>
          </nav>
        </div>
        <div>
          <nav class="flex items-center justify-center">
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
          </nav>
        </div>
      </header>

      <main class="layout mx-auto px-10 max-w-xl md:max-w-2xl lg:max-w-4xl">
        <Component />
      </main>

      <footer class="text-center text-sm space-y-4">
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
      </footer>
    </div>
  );
}
