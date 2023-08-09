/**
 * @description Section title component
 * @version 1.0.0
 */
const SectionTitle = ({ title }: { title: string }) => {
  return (
    <h2 className="font-semibold text-2xl my-4 py-2 px-2 before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-teal-400 before:shadow-sm relative inline-block w-[max-content]">
      <span className="relative text-gray-900 capitalize">{title}</span>
    </h2>
  );
};

export default SectionTitle;
