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
      <div className="group min-w-fit mx-auto w-64 h-64 md:w-full md:h-fit rounded-lg shadow-md p-5 bg-indigo-100 flex justify-center flex-col lg:col-span-4">
        <div className="text-3xl text-gray-100 mb-5 w-fit mx-auto">
          <div className="p-4 bg-amber-500 rounded-full">{icon}</div>
        </div>

        <div className="text-lg font-semibold text-gray-800 mb-4 uppercase text-center">
          {title}
        </div>
      </div>
    </>
  );
}
