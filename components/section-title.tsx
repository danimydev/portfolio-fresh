export const SectionTitle = ({
  title,
}: {
  title: string;
}) => {
  return (
    <div className="font-bold text-lg sticky top-0 bg-white py-4">
      {title}
    </div>
  );
};
