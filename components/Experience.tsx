export default function Experience() {
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
    <div class="my-6">
      <h3 class="font-bold">Experience</h3>
      <table class="container">
        {positions.map((p) => (
          <tr>
            <td>{p.company.name}</td>
            <td>{p.title}</td>
            <td>
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
      </table>
    </div>
  );
}
