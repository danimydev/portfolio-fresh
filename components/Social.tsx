export default function Social() {
  const links = [
    {
      href: "https://github.com/danimydev",
      fa: "fa-brands fa-github",
    },
    {
      href: "https://linkedin.com/in/danimydev",
      fa: "fa-brands fa-linkedin",
    },
    {
      href: "https://medium.com/@danimydev",
      fa: "fa-brands fa-medium",
    },
  ];

  return (
    <>
      <span class="mr-2">Find me on</span>
      {links.map((link, index) => (
        <a class="mx-1" key={index} href={link.href}>
          <i class={link.fa} />
        </a>
      ))}
    </>
  );
}
