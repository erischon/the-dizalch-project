interface GainCardProps {
  title: string;
  icon: JSX.Element;
}

/**
 * @description Gain Card
 * @version 1.0
 */
export default function GainCard({ gain }: { gain: GainCardProps }) {
  const { title, icon } = gain;

  return (
    <>
      <div className="group min-w-fit mx-auto rounded-lg shadow-md p-5 w-full bg-indigo-100 flex justify-center flex-col sm:col-span-4">
        <div className="text-3xl text-gray-100 mb-5 w-fit mx-auto">
          <div className="p-4 bg-indigo-400 rounded-full">{icon}</div>
        </div>

        <div className="text-lg font-semibold text-gray-800 mb-4 uppercase text-center">
          {title}
        </div>
      </div>
    </>
  );
}
