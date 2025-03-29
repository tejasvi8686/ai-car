"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

const CarList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    // api call to search cars
    console.log("Search submitted");
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <Button
          onClick={() => router.push("/admin/cars/create")}
          className="flex items-center gap-2"
        >
          <Plus className="w-4 h-4" /> Add Car
        </Button>

        <form onSubmit={handleSearchSubmit} className="flex w-full sm:w-auto">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search by name"
              className="pl-9 w-full sm:W-60"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </form>
      </div>

      {/* Car Table */}
    </div>
  );
};

export default CarList;
