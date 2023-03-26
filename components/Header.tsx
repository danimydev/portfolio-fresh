import NavigationBar from "./NavigationBar.tsx";

export default function Header(props: { active: string }) {
  return (
    <header class="py-6 flex flex-col md:flex-row gap-4 items-center">
      <div class="">
        <img
          class="w-20"
          src="/logo_animated.gif"
          alt="danimydev profile logo"
          srcset="/logo_animated.gif"
        />
      </div>
      <div>
        <a class="font-bold text-xl" href="/">daniel madrid</a>
        <NavigationBar active={props.active} />
      </div>
    </header>
  );
}
