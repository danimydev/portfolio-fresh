export const Navbar = ({
  pathname,
}: {
  pathname: string;
}) => {
  return (
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
        <div class="font-bold text-xl font-mono">
          daniel madrid
        </div>
        <div>
          <nav class="space-x-2 text-sm">
            <a
              href="/"
              class={`hover:opacity-100 opacity-50 ${
                pathname === "/" ? "opacity-100" : ""
              }`}
            >
              home
            </a>
            <a
              href="/about"
              class={`hover:opacity-100 opacity-50 ${
                pathname === "/about" ? "opacity-100" : ""
              }`}
            >
              about
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};
