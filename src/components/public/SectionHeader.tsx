type SectionHeaderProps = {
  header: string;
  title: string;
};

/**
 * @description Section Header
 * @version 1.0.0
 */
export default function SectionHeader({ header, title }: SectionHeaderProps) {
  return (
    <div className="flex flex-col mb-10 max-w-3xl">
      <p className="text-md text-gray-300 mb-5">{header}</p>

      <h2 className="text-4xl font-semibold">{title}</h2>
    </div>
  );
}
