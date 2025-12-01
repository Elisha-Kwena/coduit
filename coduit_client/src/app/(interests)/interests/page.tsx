"use client";

import { useState, useEffect } from "react";
import TopicsSuccessModal from "@/components/ui/modals/TopicSuccessModal";
import TopicsSkeleton from "@/components/ui/loaders/TopicSkeleton";

interface Interest {
  id: number;
  interest: string;
  category: number;
}

interface Category {
  id: number;
  name: string;
}

export default function TechInterests() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedInterestId, setSelectedInterestId] = useState<number[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [interest, setInterest] = useState<Interest[]>([]);
  const [defaultInterest, setDefaultInterest] = useState<Interest[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredInterests, setFilteredInterests] = useState<Interest[]>([]);

  useEffect(() => {
    // Load dummy data focused on programming and tech
    const dummyCategories: Category[] = [
      { id: 1, name: "Programming Languages" },
      { id: 2, name: "Web Development" },
      { id: 3, name: "AI & Machine Learning" },
      { id: 4, name: "DevOps & Cloud" },
      { id: 5, name: "Databases & Data Science" },
      { id: 6, name: "Mobile Development" },
      { id: 7, name: "Security & Networking" },
      { id: 8, name: "Software Engineering" },
    ];

    const dummyInterests: Interest[] = [
      { id: 1, interest: "Python", category: 1 },
      { id: 2, interest: "JavaScript", category: 1 },
      { id: 3, interest: "Java", category: 1 },
      { id: 4, interest: "C++", category: 1 },
      { id: 5, interest: "Rust", category: 1 },
      { id: 6, interest: "React", category: 2 },
      { id: 7, interest: "Angular", category: 2 },
      { id: 8, interest: "Vue.js", category: 2 },
      { id: 9, interest: "Node.js", category: 2 },
      { id: 10, interest: "HTML/CSS", category: 2 },
      { id: 11, interest: "Machine Learning", category: 3 },
      { id: 12, interest: "Deep Learning", category: 3 },
      { id: 13, interest: "Neural Networks", category: 3 },
      { id: 14, interest: "Natural Language Processing", category: 3 },
      { id: 15, interest: "Computer Vision", category: 3 },
      { id: 16, interest: "Docker", category: 4 },
      { id: 17, interest: "Kubernetes", category: 4 },
      { id: 18, interest: "AWS", category: 4 },
      { id: 19, interest: "Azure", category: 4 },
      { id: 20, interest: "CI/CD", category: 4 },
      { id: 21, interest: "SQL", category: 5 },
      { id: 22, interest: "NoSQL", category: 5 },
      { id: 23, interest: "Big Data", category: 5 },
      { id: 24, interest: "Data Analytics", category: 5 },
      { id: 25, interest: "Pandas", category: 5 },
      { id: 26, interest: "Android", category: 6 },
      { id: 27, interest: "iOS/Swift", category: 6 },
      { id: 28, interest: "Flutter", category: 6 },
      { id: 29, interest: "React Native", category: 6 },
      { id: 30, interest: "Mobile UI/UX", category: 6 },
      { id: 31, interest: "Cybersecurity", category: 7 },
      { id: 32, interest: "Ethical Hacking", category: 7 },
      { id: 33, interest: "Networking", category: 7 },
      { id: 34, interest: "Blockchain", category: 7 },
      { id: 35, interest: "Cryptography", category: 7 },
      { id: 36, interest: "Agile/Scrum", category: 8 },
      { id: 37, interest: "Design Patterns", category: 8 },
      { id: 38, interest: "Testing/QA", category: 8 },
      { id: 39, interest: "Open Source", category: 8 },
      { id: 40, interest: "System Design", category: 8 },
    ];

    const dummyDefaultInterests: Interest[] = [
      { id: 1, interest: "Python", category: 1 },
      { id: 2, interest: "JavaScript", category: 1 },
      { id: 6, interest: "React", category: 2 },
      { id: 11, interest: "Machine Learning", category: 3 },
      { id: 16, interest: "Docker", category: 4 },
      { id: 21, interest: "SQL", category: 5 },
      { id: 26, interest: "Android", category: 6 },
      { id: 31, interest: "Cybersecurity", category: 7 },
      { id: 36, interest: "Agile/Scrum", category: 8 },
    ];

    setCategories(dummyCategories);
    setInterest(dummyInterests);
    setDefaultInterest(dummyDefaultInterests);
    setSelectedInterestId(dummyDefaultInterests.map(interest => interest.id));
    setIsLoading(false);
  }, []);

  useEffect(() => {
    let result = interest;
    if (selectedCategory) {
      result = interest.filter((interest) => interest.category === parseInt(selectedCategory));
    }
    if (searchQuery.trim() !== "") {
      result = result.filter((interest) =>
        interest.interest.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setFilteredInterests(result);
  }, [selectedCategory, searchQuery, interest]);

  const toggleInterest = (interestId: number) => {
    setSelectedInterestId((prev) =>
      prev.includes(interestId)
        ? prev.filter((id) => id !== interestId)
        : [...prev, interestId]
    );
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleSelectDefault = () => {
    setSelectedInterestId(defaultInterest.map((interest) => interest.id));
  };

  if (isLoading) {
    return <TopicsSkeleton />;
  }

  return (
    <div className="h-screen w-full flex items-center justify-start px-2 lg:px-0 py-4 flex-col">
      <h1 className="text-sapphire text-2xl lg:text-4xl font-extrabold text-center">What tech areas interest you?</h1>
      <p className="text-black dark:text-white text-md lg:text-xl text-center">
        Select your favorite programming and tech topics. This helps us personalize your developer feed. (Don&apos;t worry, you can change these later.)
      </p>

      <div className="lg:w-[90%] w-[95%] flex flex-col gap-2 items-center justify-between p-2 rounded-md border border-dark800/10 dark:border-chrome/10 mx-auto mt-4 bg-[#ffffff] dark:bg-dark800 shadow-lg">
        <div className="w-full flex flex-col lg:flex-row gap-4 items-center justify-between p-1 rounded-md border-dark800/10 dark:border-chrome/10 mx-auto bg-off_white dark:bg-dark800">
          <form onSubmit={handleSearch} className="w-full lg:w-2/4 flex items-center justify-center gap-4">
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
            onChange={handleCategoryChange}
            className="appearance-none bg-[length:1.5rem_1.5rem] bg-[position:right_0.5rem_center] bg-no-repeat bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYgOEwxMCAxMkwxNCA4IiBzdHJva2U9IiM2QjcyODAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+')] border border-gray-300 dark:border-chrome/10 text-gray-900 dark:text-gray-300 bg-white dark:bg-dark800 rounded-[4px] p-2 pr-8 text-md w-full lg:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-sapphire focus:border-transparent"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option
                key={category.id}
                value={category.id}
                className="bg-white dark:bg-dark800 text-gray-900 dark:text-gray-300"
              >
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full">
          <h1 className="text-black dark:text-white">Default Tech Topics</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
            {defaultInterest.map((interest) => (
              <button
                key={interest.id}
                type="button"
                onClick={() => toggleInterest(interest.id)}
                className={`topic-btn rounded-lg shadow-lg border transition-all duration-200 text-xs sm:text-sm font-medium text-center break-words p-2 flex items-center justify-center ${
                  selectedInterestId.includes(interest.id)
                    ? "bg-sapphire border-sapphire text-white"
                    : "bg-dark-800 border-dark-600 hover:bg-dark-700 text-white"
                }`}
              >
                {interest.interest}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="topics lg:w-[90%] w-[95%] mt-4 pb-4">
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2">
          <div className="w-full lg:max-h-[400px] max-h-[70vh] overflow-y-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 p-2">
              {filteredInterests.map((interest) => (
                <button
                  key={interest.id}
                  onClick={() => toggleInterest(interest.id)}
                  type="button"
                  className={`topic-btn p-0 rounded-lg shadow-lg border hover:border-sapphire transition-all duration-200 text-xs sm:text-sm font-medium text-center break-words min-h-[40px] flex items-center justify-center ${
                    selectedInterestId.includes(interest.id)
                      ? "bg-sapphire border-sapphire text-white shadow-lg"
                      : "bg-white dark:bg-black border-chrome/70 text-black dark:text-white"
                  }`}
                >
                  {interest.interest}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row w-full items-center justify-center gap-4">
            <button
              onClick={handleSelectDefault}
              type="button"
              className="w-full lg:w-auto p-2 text-sapphire backdrop-blur-lg bg-sapphire px-6 font-extrabold border-[2px] border-sapphire rounded-[5px] bg-transparent"
            >
              Select Default
            </button>
            <button
              type="submit"
              className="w-full lg:w-auto p-2 text-white bg-sapphire px-6 font-extrabold border-[2px] border-sapphire rounded-[5px]"
            >
              Submit selected ({selectedInterestId.length})
            </button>
          </div>
        </form>
      </div>

      <TopicsSuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        redirectUrl="/feeds"
        selectedTopicsCount={selectedInterestId.length}
      />
    </div>
  );
}