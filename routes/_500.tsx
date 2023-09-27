import { ErrorPageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function Error500Page({ error }: ErrorPageProps) {
  return (
    <>
      <Head>
        <title>500 - Internal server error</title>
      </Head>
      <div class="px-4 py-8 mx-auto">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <h1 class="text-4xl font-bold">500 - Internal server error</h1>
          <p class="my-4">
            Something went wrong on our side.
          </p>
          <p>{(error as Error).message}</p>
          <a href="/" class="underline">Try going back home</a>
        </div>
      </div>
    </>
  );
}
