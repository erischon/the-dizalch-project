/**
 * @description Section title component
 * @version 1.0.0
 */
const Highlight = ({ text }: { text: string }) => {
  return (
    <span className="text-lg mx-1 font-semibold before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-teal-300 relative">
      <span className="relative">{text}</span>
    </span>
  );
};

export default Highlight;
