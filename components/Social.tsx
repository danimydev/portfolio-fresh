const icons = {
  github: "fa-brands fa-github",
  linkedin: "fa-brands fa-linkedin",
  medium: "fa-brands fa-medium",
};

export default function Social() {
  return (
    <>
      Find me on{" "}
      <a href="https://github.com/danimydev" target="_blank">
        <i class={icons.github}></i>
      </a>,{" "}
      <a href="https://linkedin.com/in/danimydev" target="_blank">
        <i class={icons.linkedin}></i>
      </a>{" "}
      and{" "}
      <a href="https://medium.com/@danimydev" target="_blank">
        <i class={icons.medium}></i>
      </a>
    </>
  );
}
