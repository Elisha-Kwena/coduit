// app/(onboarding)/topics/page.tsx
"use client";

import { useState, useEffect } from "react";
import { interestService } from "@/service/interestService";
import TopicsSuccessModal from "@/components/ui/modals/TopicSuccessModal";
import InterestsLoader from "@/components/ui/loaders/InterestsLoader";

interface Interest {
  id: number;
  interest: string;
  category: number;
  is_popular?: boolean;
}

interface Category {
  id: number;
  name: string;
}

export default function Interest() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInterestId, setSelectedInterestId] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null)

  // Real data from backend
  const [categories, setCategories] = useState<Category[]>([]);
  const [allInterests, setAllInterests] = useState<Interest[]>([]);
  const [defaultInterest, setDefaultInterest] = useState<Interest[]>([]);
  const [error,setError] = useState<string | null>(null)


  // loading all categories and all interests and popular ones on mount
  useEffect(() => {
    const loadData = async () =>{
      try{
        setIsLoading(true)
        setError(null)

        const [cats, all, popular] = await Promise.all([
          interestService.getCategories(),
          interestService.getInterests(),
          interestService.getPopularInterests()
        ]);

        setCategories(cats);
        setAllInterests(all)
        setDefaultInterest(popular)

        // first time user : no interests saved -> pre-select recommend

        // Always pre-select recommended topics during onboarding
        // (safe because this page is only shown once after signup)
        const recommendedIds = popular.map(i => i.id);
        setSelectedInterestId(recommendedIds);

      } catch(err:any){
        console.log("Failed to load interests", err);
        setError("Failed to load interests. Please try again");
      } finally {
        setIsLoading(false);
      }
    };

    loadData()
  }, [])



  const filteredInterests = allInterests.filter((item) => {
    const matchesCategory = selectedCategory 
      ? item.category === Number(selectedCategory) 
      : true;
    const matchesSearch = searchQuery
      ? item.interest.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesCategory && matchesSearch;
  });

  const toggleInterest = (id: number) => {
    setSelectedInterestId(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const handleSelectDefault = () => {
    setSelectedInterestId(defaultInterest.map(i => i.id));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedInterestId.length === 0){
      setMessage("Please select at least one Interest to Continue");
      setTimeout(() => {
        setMessage(null);
      }, 4000);
      return
    }

    try{
      setIsSubmitting(true)
      setError(null);
      setMessage(null)

      await interestService.selectInitialInterests(selectedInterestId)
      
      setIsModalOpen(true)
    } catch (err:any){
      console.error("Failed to save Interests", err)
      const message =
        err?.message ||
        "Something went wrong. Please try again.";
      setError(message)
      setMessage(message)
    } finally{
      setIsSubmitting(false)
    }
  };

  // loading state
  // Loading state
  if (isLoading) {
    return (
      <InterestsLoader/>
    );
  }

  // Error state (rare)
  if (error && !isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center flex-col gap-4">
        <p className="text-red-500 text-xl">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-sapphire text-white rounded-lg"
        >
          Retry
        </button>
      </div>
    );
  }


  return (
    <div className="h-screen w-full flex items-center justify-start px-2 lg:px-0 py-4 flex-col">
      <h1 className="text-sapphire text-2xl lg:text-4xl font-extrabold text-center">
        What are you interested in?
      </h1>
      <p className="text-black dark:text-white text-md lg:text-xl text-center">
        Select your favorite topics. This helps us personalize your community feed. (Don't worry, you can change these later.)
      </p>

      {/* Fixed Top Toast Notification */}
      {message && (
      <div className="inset-x-3 md:inset-x-0 top-4 fixed z-50 flex justify-center pointer-events-none">
        <div
          className="bg-lime_green text-white px-6 py-3 rounded-lg shadow-2xl border border-white/20
                     font-fira-code font-medium text-center
                     animate-in slide-in-from-top-4 fade-in duration-500
                     data-[state=closed]:animate-out slide-out-to-top-4 fade-out"
          // Auto-remove from DOM after animation ends
          onAnimationEnd={(e) => {
            if (e.animationName.includes("slide-out")) {
              setMessage(null);
            }
          }}
        >
          {message}
        </div>
      </div>
      )}
      
      {/* Filters */}
      <div className="lg:w-[90%] w-[95%] flex flex-col gap-2 items-center justify-between p-2 rounded-md border border-dark800/10 dark:border-chrome/10 mx-auto mt-4 bg-[#ffffff] dark:bg-dark800 shadow-lg">
        <div className="w-full flex flex-col lg:flex-row gap-4 items-center justify-between p-1 rounded-md border-dark800/10 dark:border-chrome/10 mx-auto bg-off_white dark:bg-dark800">
          <form onSubmit={(e) => e.preventDefault()} className="w-full lg:w-2/4 flex items-center justify-center gap-4">
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              className="p-2 pl-6 w-[95%] text-dark700 dark:text-white focus:outline-sapphire focus:border-sapphire focus:ring-0 border border-dark800/10 dark:border-chrome/10 bg-white dark:bg-dark800 rounded-[3px]"
              placeholder="Search Topic ..."
            />
            <button type="submit" className="p-2 text-md rounded-[3px] px-4 text-white bg-sapphire">
              Search
            </button>
          </form>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="appearance-none bg-[length:1.5rem_1.5rem] bg-[position:right_0.5rem_center] bg-no-repeat bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYgOEwxMCAxMkwxNCA4IiBzdHJva2U9IiM2QjcyODAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+')] border border-gray-300 dark:border-chrome/10 text-gray-900 dark:text-gray-300 bg-white dark:bg-dark800 rounded-[4px] p-2 pr-8 text-md w-full lg:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-sapphire focus:border-transparent"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Default Topics */}
        <div className="w-full">
          <h1 className="text-black dark:text-white mb-2">Recommended Interests</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
            {defaultInterest.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => toggleInterest(item.id)}
                className={`topic-btn rounded-lg shadow-lg border transition-all duration-200 text-xs sm:text-sm font-medium text-center break-words p-2 flex items-center justify-center ${
                  selectedInterestId.includes(item.id)
                    ? "bg-sapphire border-sapphire text-white"
                    : "bg-dark-800 border-dark-600 hover:bg-dark-700 text-white"
                }`}
              >
                {item.interest}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* All Topics */}
      <div className="topics lg:w-[90%] w-[95%] mt-4 pb-4">
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2">
          <div className="w-full lg:max-h-[400px] max-h-[70vh] overflow-y-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 p-2">
              {filteredInterests.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => toggleInterest(item.id)}
                  className={`topic-btn p-0 rounded-lg shadow-lg border hover:border-sapphire transition-all duration-200 text-xs sm:text-sm font-medium text-center break-words min-h-[40px] flex items-center justify-center ${
                    selectedInterestId.includes(item.id)
                      ? "bg-sapphire border-sapphire text-white shadow-lg"
                      : "bg-white dark:bg-black border-chrome/70 text-black dark:text-white"
                  }`}
                >
                  {item.interest}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row w-full items-center justify-center gap-4">
            <button
              type="button"
              onClick={handleSelectDefault}
              className="w-full lg:w-auto p-2 text-sapphire backdrop-blur-lg bg-sapphire px-6 font-extrabold border-[2px] border-sapphire rounded-[5px] bg-transparent transition-all duration-300 ease-in-out hover:bg-sapphire hover:text-white hover:border-white"
            >
              Select Recommended
            </button>
            <button
              type="submit"
              className="w-full lg:w-auto p-2 text-white bg-sapphire px-6 font-extrabold border-[2px] border-sapphire rounded-[5px] transition-all duration-300 ease-in-out hover:border-sapphire hover:bg-transparent hover:text-sapphire"
            >
              Submit selected ({selectedInterestId.length})
            </button>
          </div>
        </form>
      </div>

      {/* YOUR ORIGINAL MODAL */}
      <TopicsSuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        redirectUrl="/feeds"
        selectedTopicsCount={selectedInterestId.length}
      />
    </div>
  );
}