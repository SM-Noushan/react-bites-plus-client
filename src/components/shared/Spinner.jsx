const Spinner = () => {
  return (
    <section className="w-full flex justify-center items-center h-52 lg:h-[calc(100dvh-488px)]">
      <div
        className="animate-spin inline-block size-16 border-[3px] border-current border-t-transparent text-lime-600 rounded-full"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </section>
  );
};

export default Spinner;
