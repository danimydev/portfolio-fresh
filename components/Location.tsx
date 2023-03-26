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

export default function Location() {
  function date() {
    const date = new Date();
    return `(${monthNames[date.getMonth()]} ${date.getFullYear()})`;
  }

  return (
    <div class="flex p-5 border-1">
      <div>
        📍
      </div>
      <div>
        <div class="opacity-50">
          {date()}
        </div>
        <div class="flex items-center">
          Barranquilla, Colombia
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
