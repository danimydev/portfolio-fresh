import { LayoutProps } from "$fresh/server.ts";

export default function Layout({ Component, url }: LayoutProps) {
  const { pathname } = url;
  return (
    <div class="layout mx-auto px-4 max-w-xl space-y-5 font-mono">
      <div class="flex items-center flex-start space-x-4 py-10">
        <div>
          <img
            class=""
            src="/logo_animated.gif"
            width="80"
            height="80"
            alt="the Github octocat animated logo"
            draggable={false}
          />
        </div>
        <div>
          <div class="font-bold text-xl ">
            daniel madrid
          </div>
          <div>
            <nav class="space-x-2 text-sm">
              <a
                href="/"
                class={`hover:opacity-100 opacity-50 ${pathname === "/" ? "opacity-100" : ""
                  }`}
              >
                home
              </a>
              <a
                href="/about"
                class={`hover:opacity-100 opacity-50 ${pathname === "/about" ? "opacity-100" : ""
                  }`}
              >
                about
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div class="flex items-center">
        Find me on
        <div class="ml-2 flex items-center flex-start space-x-2">
          <div>
            <a href="https://www.github.com/danimydev" target="blank">
              <i class="fa-brands fa-github text-gray-400 hover:text-purple-500" />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/danimydev" target="blank">
              <i class="fa-brands fa-linkedin text-gray-400 hover:text-blue-500" />
            </a>
          </div>
          <div>
            <a href="https://medium.com/@danimydev" target="blank">
              <i class="fa-brands fa-medium text-gray-400 hover:text-green-500" />
            </a>
          </div>
        </div>
      </div>
      <Component />
      <div class="text-center text-sm py-10">
        Made with &#x2764; by{" "}
        <a href="https://www.github.com/danimydev" target="blank">
          <span class="opacity-50 hover:opacity-100">
            @danimydev
          </span>
        </a>
      </div>
    </div>
  );
}
