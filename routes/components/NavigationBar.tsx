export default function NavigationBar(
  props: { active: string; class?: string },
) {
  const items = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
  ];

  return (
    <nav class={"flex " + props.class ?? ""}>
      <ul class="flex justify-center items-center gap-4 mx-4 my-6 flex-wrap">
        {items.map((item) => (
          <li>
            <a
              href={item.href}
              class={`p-2 hover:underline ${
                props.active == item.href ? "font-bold" : ""
              }`}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
