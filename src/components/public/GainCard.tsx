interface GainCardProps {
  title: string;
  icon: JSX.Element;
  color: string;
}

/**
 * @description Gain Card
 * @version 1.0
 */
export default function GainCard({ gain }: { gain: GainCardProps }) {
  const { title, icon, color } = gain;

  return (
    <>
      <div className="group min-w-fit mx-auto p-5 w-60 h-60 md:w-full md:h-fit rounded-lg shadow-md  bg-indigo-800 flex flex-col justify-center lg:col-span-4">
        <div className="text-3xl mb-5 w-fit mx-auto text-indigo-900">
          <div className="p-4 bg-indigo-100 rounded-full">{icon}</div>
        </div>

        <div className="text-lg font-semibold mb-4 uppercase text-center">
          {title}
        </div>
      </div>
    </>
  );
}
