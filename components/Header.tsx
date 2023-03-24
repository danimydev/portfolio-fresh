import NavigationBar from "./NavigationBar.tsx";

export default function Header(props: { active: string }) {
  return (
    <div>
      <header class="my-6">
        <span class="font-bold text-xl">Daniel Madrid Yepez</span>
        <NavigationBar active={props.active} />
      </header>
    </div>
  );
}
