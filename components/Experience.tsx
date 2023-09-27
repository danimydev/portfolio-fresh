export const Experience = () => {
  const positions = [
    {
      title: "Software Enginner",
      company: {
        name: "CI&T",
        url: "https://ciandt.com/us/en-us",
      },
    },
    {
      title: "Software Enginner",
      company: {
        name: "Globant",
        url: "https://www.globant.com/",
      },
    },
    {
      title: "Node JS Developer",
      company: {
        name: "Zemoga",
        url: "https://www.zemoga.com/",
      },
    },
    {
      title: "Web Developer",
      company: {
        name: "Uninorte",
        url: "https://www.uninorte.edu.co/",
      },
    },
  ];

  return (
    <div>
      <table class="text-left table-auto border-collapse w-full">
        <thead>
          <tr>
            <th class="font-normal opacity-50 py-3">Company</th>
            <th class="font-normal opacity-50 py-3">Role/Position</th>
            <th class="font-normal opacity-50 py-3">Website</th>
          </tr>
        </thead>
        <tbody>
          {positions.map((p) => (
            <tr class="border-t-1">
              <td class="py-3">{p.company.name}</td>
              <td class="py-3">{p.title}</td>
              <td class="py-3">
                <a
                  href={p.company.url}
                  target="_blank"
                  class="opacity-50 hover:opacity-100"
                >
                  <i class={`${"fa-solid fa-link fa-2xs"}`}></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
