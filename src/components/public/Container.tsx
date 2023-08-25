type ContainerProps = {
  children: React.ReactNode;
  background?: string;
};

/**
 * @description Container component, used to wrap content in a container
 * @version 1.0.0
 */
export default function Container({ children, background }: ContainerProps) {
  return (
    <>
      <div
        className={`${background} rounded-3xl p-5 lg:p-20 shadow-lg shadow-black/20`}
      >
        {children}
      </div>
    </>
  );
}
