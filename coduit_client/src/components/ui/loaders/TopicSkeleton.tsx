export default function TopicsSkeleton() {
    return (
      <div className="h-screen w-full flex items-center justify-start px-2 lg:px-0 py-4 flex-col animate-pulse">
        {/* Header Skeleton */}
        <div className="w-full max-w-2xl mx-auto text-center mb-8">
          <div className="h-10 bg-gray-300 dark:bg-dark-700 rounded-lg mb-4 mx-auto w-3/4"></div>
          <div className="h-6 bg-gray-300 dark:bg-dark-700 rounded-lg mb-2 mx-auto w-full"></div>
          <div className="h-6 bg-gray-300 dark:bg-dark-700 rounded-lg mx-auto w-5/6"></div>
        </div>
  
        {/* Search and Filter Skeleton */}
        <div className="lg:w-[90%] w-[95%] flex flex-col gap-4 items-center justify-between p-4 rounded-md border border-gray-200 dark:border-chrome/10 mx-auto mb-6 bg-white dark:bg-dark-800">
          <div className="w-full flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Input Skeleton */}
            <div className="w-full lg:w-2/4 h-12 bg-gray-200 dark:bg-dark-700 rounded-[3px]"></div>
            
            {/* Category Select Skeleton */}
            <div className="w-full lg:w-1/4 h-12 bg-gray-200 dark:bg-dark-700 rounded-[3px]"></div>
          </div>
        </div>
  
        {/* Default Topics Section Skeleton */}
        <div className="lg:w-[90%] w-[95%] mb-8">
          <div className="h-6 w-40 bg-gray-300 dark:bg-dark-700 rounded-lg mb-4"></div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="h-16 bg-gray-200 dark:bg-dark-700 rounded-lg shadow-lg border border-gray-300 dark:border-chrome/10"
              ></div>
            ))}
          </div>
        </div>
  
        {/* Main Topics Grid Skeleton */}
        <div className="lg:w-[90%] w-[95%]">
          <div className="w-full max-h-[500px] lg:h-[400px] h-[70vh] overflow-hidden">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 p-2">
              {Array.from({ length: 30 }).map((_, index) => (
                <div
                  key={index}
                  className="h-12 bg-gray-200 dark:bg-dark-700 rounded-lg border border-gray-300 dark:border-chrome/10"
                ></div>
              ))}
            </div>
          </div>
  
          {/* Buttons Skeleton */}
          <div className="flex flex-col lg:flex-row w-full items-center justify-center gap-4 mt-6">
            <div className="w-full lg:w-auto h-12 bg-gray-300 dark:bg-dark-700 rounded-[5px] border-2 border-gray-400 dark:border-chrome/10"></div>
            <div className="w-full lg:w-auto h-12 bg-gray-300 dark:bg-dark-700 rounded-[5px] border-2 border-gray-400 dark:border-chrome/10"></div>
          </div>
        </div>
      </div>
    );
  }