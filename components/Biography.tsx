import { Heading } from "@/components/heading.tsx";

export const Biography = () => {
  return (
    <div class="space-y-5">
      <Heading>
        About
      </Heading>
      <div class=" my-4">
        <p class="my-3">Hey👋,</p>
        <p class="my-3">I am Daniel Madrid,</p>
        <p class="my-3">
          I was born in Colombia, I studied System Engineer at Universidad del
          Norte in Barranquilla. Currently I work at CI&T as a{" "}
          <strong class="italic">Backend Developer</strong>, I am part of a team
          which builds digital products and also maintain multiple IT services!
        </p>
      </div>
    </div>
  );
};
