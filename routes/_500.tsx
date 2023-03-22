import { ErrorPageProps } from "$fresh/server.ts";

export default function Error500Page({ error }: ErrorPageProps) {
  return (
    <main class="h-screen w-full flex flex-col justify-center items-center">
      <h1 class="text-9xl font-extrabold tracking-widest">500</h1>
      <div class="bg-[#2eff7b] px-2 text-sm rounded rotate-12 absolute">
        Server Error
      </div>
      <button class="mt-5">
        <a class="hover:underline" href="/">Go Home</a>
      </button>
    </main>
  );
}
