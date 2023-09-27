import { LayoutProps } from "$fresh/server.ts";

import { Navbar } from "../../components/navbar.tsx";
import { Footer } from "../../components/footer.tsx";
import {
  GithubIcon,
  LinkedinIcon,
  MediumIcon,
} from "../../components/icons/index.tsx";

export default function Layout({ Component, url }: LayoutProps) {
  return (
    <div class="layout mx-auto px-4 max-w-xl space-y-5 font-mono">
      <Navbar pathname={url.pathname} />
      <div class="flex items-center">
        Find me on
        <div class="ml-2 flex items-center flex-start space-x-2">
          <div>
            <a href="https://www.github.com/danimydev" target="blank">
              <GithubIcon />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/danimydev" target="blank">
              <LinkedinIcon />
            </a>
          </div>
          <div>
            <a href="https://medium.com/@danimydev" target="blank">
              <MediumIcon />
            </a>
          </div>
        </div>
      </div>
      <Component />
      <Footer />
    </div>
  );
}
