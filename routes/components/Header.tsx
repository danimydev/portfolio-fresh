import NavigationBar from "./NavigationBar.tsx";

export default function Header(props: { active: string }) {
  return (
    <div>
      <header class="mx-auto max-w-screen-lg flex gap-3">
        <NavigationBar class="hidden md:flex" active={props.active} />
      </header>
    </div>
  );
}
