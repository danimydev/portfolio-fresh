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
      <ul class="flex gap-4">
        {items.map((item) => (
          <a
            href={item.href}
            class={`hover:underline text-xs ${
              props.active == item.href ? "font-bold" : ""
            }`}
          >
            {item.name}
          </a>
        ))}
      </ul>
    </nav>
  );
}
