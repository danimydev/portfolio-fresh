export default function Contact() {
  return (
    <div class="my-8 container">
      <h3 class="font-bold">Contact</h3>

      <form method="get" action="/sendemail" class="border-2 p-6 my-4">
        <p class="mt-4" htmlFor="email">EMAIL</p>
        <input type="mail" name="email" class="border-2 container" />

        <p class="mt-4" htmlFor="message">MESSAGE</p>
        <textarea class="w-200 border-2 container" name="message"></textarea>

        <input
          type="submit"
          class="bg-black mt-4 px-3 py-1 font-extralarge text-white cursor-pointer"
          value={"Send"}
        >
        </input>
      </form>
    </div>
  );
}
