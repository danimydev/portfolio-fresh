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
        <span class="font-bold text-xl">daniel madrid</span>
        <NavigationBar active={props.active} />
      </div>
    </header>
  );
}
