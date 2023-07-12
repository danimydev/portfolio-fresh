import { user } from "../github/data.ts";

export default function Location() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function getDate() {
    const date = new Date();
    return `(${monthNames[date.getMonth()]} ${date.getFullYear()})`;
  }

  return (
    <div class="flex p-5 border-1 my-10">
      <div>
        📍
      </div>
      <div>
        <div class="opacity-50">
          {getDate()}
        </div>
        <div class="flex items-center">
          {user.location}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg"
            alt="colombia flag"
            class="w-4 h-3 ml-2 rounded"
          />
        </div>
      </div>
    </div>
  );
}
