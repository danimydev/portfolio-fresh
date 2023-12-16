import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx";
import IconBrandLinkedin from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-linkedin.tsx";
import IconBrandMedium from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-medium.tsx";
import IconBrandInstagram from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-instagram.tsx";

export const Social = () => {
  return (
    <div class="flex items-center space-x-2">
      <a
        href="https://www.github.com/danimydev"
        target="blank"
        aria-label="Visit GitHub danimydev profile"
      >
        <IconBrandGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/danimydev"
        target="blank"
        aria-label="Visit Linkedin danimydev profile"
      >
        <IconBrandLinkedin />
      </a>
      <a
        href="https://medium.com/@danimydev"
        target="blank"
        aria-label="Visit Medium danimydev profile"
      >
        <IconBrandMedium />
      </a>
      <a
        href="https://instagram.com/danimydev"
        target="blank"
        aria-label="Visit Medium danimydev profile"
      >
        <IconBrandInstagram />
      </a>
    </div>
  );
};
