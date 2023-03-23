import NavigationBar from "./NavigationBar.tsx";

export default function Header(props: { active: string }) {
  return (
    <div>
      <header>
        <NavigationBar active={props.active} />
      </header>
    </div>
  );
}
