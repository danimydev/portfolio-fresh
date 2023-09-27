import { JSX } from "preact";

export const Heading = ({
  children,
}: JSX.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h1 class=" font-bold text-lg">
      {children}
    </h1>
  );
};
