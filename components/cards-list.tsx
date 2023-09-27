import { Card } from "./card.tsx";
import { Heading } from "./heading.tsx";

export const CardsList = ({
  projects,
}: {
  projects: {
    name: string;
    html_url: string;
    description: string;
    url: string;
    created_at: string;
    updated_at: string;
    language: string;
    topics: string[];
  }[];
}) => {
  return (
    <div class="space-y-5">
      <Heading>
        Projects
      </Heading>
      {projects.map((project) => (
        <Card
          title={project.name}
          description={project.description}
          language={project.language}
          link={project.html_url}
          createdAt={project.created_at}
          updatedAt={project.updated_at}
        />
      ))}
    </div>
  );
};
