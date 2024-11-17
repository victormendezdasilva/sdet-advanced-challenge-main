"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const SearchSection = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?location=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <section id="searcher-section" className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[url('https://res.cloudinary.com/infovalue/image/upload/q_auto,w_800,h_600,c_limit/v1724389977/sdet/hawaii-beach-landscape-with-nature-coastline.jpg')] bg-cover bg-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              Find Your Perfect Getaway
            </h1>
            <p className="mx-auto max-w-[700px] text-white md:text-xl">
              Discover and book unique accommodations around the world.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input
                className="flex-1 bg-slate-100"
                placeholder="Where are you going?"
                id="search-input"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button
                type="submit"
                id="search-button"
                variant={"default"}
                onClick={handleSearch}
              >
                <SearchIcon className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
