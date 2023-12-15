type Company = {
  name: string;
  url: string;
};

type PositionProps = {
  role: string;
  description: string;
  company: Company;
  from: number;
  to?: number;
};

export const Position = ({
  role,
  description,
  company,
  from,
  to,
}: PositionProps) => {
  return (
    <div class="space-y-2">
      <div class="text-sm text-[darkgray]">
        {from} - {to ? to : "PRESENT"}
      </div>
      <div class="font-bold">
        <a href={company.url}>{role} . {company.name}</a>
      </div>
      <div class="text-sm">
        <p>{description}</p>
      </div>
    </div>
  );
};
