import Link from "next/link";

/**
 * @description skillCard
 * @version 1.0.0
 */
const SkillCard = ({ skill }: { skill: any }) => {
  return (
    <Link href={`/tags/${skill.name}`} key={skill.name}>
      <div className="text-indigo-600 dark:text-indigo-200 text-4xl p-2">
        <skill.icon />
      </div>
    </Link>
  );
};
export default SkillCard;
