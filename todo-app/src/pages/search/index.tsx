import Link from "next/link";
import React, { useState } from "react";

const SearchTask = () => {
  const [searchText, setSearchText] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState<string[]>([]);
  const searchList = [
    "API Integration",
    "UI Implementation",
    "UI Improvement",
    "Test",
    "testui elements",
  ];

  const handleSearch = (value: string) => {
    if (value.length === 0) {
      setSearchSuggestion([]);
    }
    setSearchText(value);
    if (value.length < 3) return;
    const result = searchList.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setSearchSuggestion(result);
  };
  return (
    <div className="flex flex-col p-16">
      <div className="flex items-center flex-col ">
        <header className="">Search Task</header>
        <div className="mt-2 w-full">
          <input
            type="text"
            value={searchText}
            placeholder="search your next task here"
            onChange={(e) => handleSearch(e.target.value)}
            className="border solid rounded-sm p-2 w-full"
          />
        </div>
      </div>
      {searchSuggestion.length === 0 ? (
        searchText.length > 3 && (
          <div className="mt-2">
            <span className="text-xl">search result...</span>
          </div>
        )
      ) : (
        <div className="flex flex-col gap-1 mt-2">
          {searchSuggestion.map((item) => {
            return <div key={item}>{item}</div>;
          })}
        </div>
      )}
      <div className="mt-1">
        {/* <a href="/" className="underline">
          create a task here
        </a> */}
        <Link href={"/create-task"} className={"underline"}>create a task here:</Link>
      </div>
    </div>
  );
};

export default SearchTask;
