import FeaturedGroups from "@/components/pages/feeds/FeaturedGroups"
import FeedFilters from "@/components/pages/feeds/FeedFilter";

import FeedsContainer from "@/components/pages/feeds/FeedsContainer";

export default function Feeds(){
  return(
    <>
      <div className="w-full md:pl-72 ml-0 h-screen pt-[64] bg-white dark:bg-black md:pr-1">
        <div className="w-full ml-0 bg-gray-100 dark:bg-dark800 h-full overflow-scroll rounded-t-sm">

          <div className="w-full flex flex-col gap-2 p-1 pt-0">

              {/* ========================================== Featured Groups ========================================== */}
              <div className="w-full">
                <FeaturedGroups/>
              </div>

              <div className="w-full flex items-center justify-between">
                <h1 className="dark:text-white">Feeds</h1>
                <FeedFilters/>
              </div>

              {/* ============================================= Feeds ============================================================== */}
              <div className="w-full">
                <FeedsContainer/>
              </div>

          </div>
        </div>
      </div>
    </>
  )
}