export default function NavigationBar(
  props: { active: string },
) {
  const items = [
    {
      name: "HOME",
      href: "/",
    },
    {
      name: "ABOUT",
      href: "/about",
    },
  ];

  return (
    <nav>
      <ul class="flex items-center gap-4 flex-wrap">
        {items.map((item) => (
          <li>
            <a
              href={item.href}
              class={`hover:underline text-xs ${
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
