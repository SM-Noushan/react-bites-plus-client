const CardSkeleton = () => {
  return (
    <div className="flex animate-pulse">
      <div className="ms-4 mt-2 w-full">
        <p className="h-40 bg-gray-200 rounded-lg w-full"></p>
        <ul className="mt-5 space-y-3">
          <li className="w-full h-4 bg-gray-200 rounded-full"></li>
          <li className="w-full h-4 bg-gray-200 rounded-full"></li>
          <li className="w-full h-4 bg-gray-200 rounded-full"></li>
          <li className="w-full h-4 bg-gray-200 rounded-full"></li>
        </ul>
        <div className="flex-shrink-0 mt-5 flex justify-between">
          <span className="w-32 block bg-gray-200 rounded-full"></span>
          <span className="size-12 block bg-gray-200 rounded-full"></span>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
