import { getDate } from "../utils/format-date.ts";

export const Location = ({
  user,
}: {
  user: {
    location: string;
  };
}) => {
  const { month, year } = getDate();
  return (
    <div class="flex border rounded-lg shadow px-5 py-4 pb-5 space-y-4 font-mono text-sm">
      <div>
        <p>
          <span>
            📍
          </span>
          <span class="opacity-50">
            {`${month}, ${year}`}
          </span>
        </p>
        <p class="flex items-center pl-5">
          {user.location || "Barranquilla, Atlantico, Colombia"}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg"
            alt="colombia flag"
            class="w-4 h-3 ml-2 rounded"
          />
        </p>
      </div>
    </div>
  );
};
