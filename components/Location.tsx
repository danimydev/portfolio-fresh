import { user } from "../github/data.ts";
import { getDate } from "../utils/date.ts";

export default function Location() {
  const { month, year } = getDate();
  return (
    <div class="flex p-5 border-1 my-10">
      <span>
        📍
      </span>
      <div>
        <p class="opacity-50">
          {`${month}, ${year}`}
        </p>
        <p class="flex items-center">
          {user.location}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg"
            alt="colombia flag"
            class="w-4 h-3 ml-2 rounded"
          />
        </p>
      </div>
    </div>
  );
}
