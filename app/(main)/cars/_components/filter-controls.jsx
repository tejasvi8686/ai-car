"use client";

import { Check, X, ChevronDown } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export const CarFilterControls = ({
  filters,
  currentFilters,
  onFilterChange,
  onClearFilter,
}) => {
  const { make, bodyType, fuelType, transmission, priceRange } = currentFilters;
  const [expandedSections, setExpandedSections] = useState({
    make: true,
    bodyType: true,
    fuelType: true,
    transmission: true,
    price: true,
  });

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const filterSections = [
    {
      id: "make",
      title: "Make",
      options: filters.makes.map((make) => ({ value: make, label: make })),
      currentValue: make,
      onChange: (value) => onFilterChange("make", value),
    },
    {
      id: "bodyType",
      title: "Body Type",
      options: filters.bodyTypes.map((type) => ({ value: type, label: type })),
      currentValue: bodyType,
      onChange: (value) => onFilterChange("bodyType", value),
    },
    {
      id: "fuelType",
      title: "Fuel Type",
      options: filters.fuelTypes.map((type) => ({ value: type, label: type })),
      currentValue: fuelType,
      onChange: (value) => onFilterChange("fuelType", value),
    },
    {
      id: "transmission",
      title: "Transmission",
      options: filters.transmissions.map((type) => ({
        value: type,
        label: type,
      })),
      currentValue: transmission,
      onChange: (value) => onFilterChange("transmission", value),
    },
  ];

  return (
    <div className="space-y-8">
      {/* Price Range */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-900">Price Range</h3>
          <button
            onClick={() => toggleSection("price")}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                expandedSections.price ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
        {expandedSections.price && (
          <div className="space-y-4 animate-fadeIn">
            <div className="px-2">
              <Slider
                min={filters.priceRange.min}
                max={filters.priceRange.max}
                step={100}
                value={priceRange}
                onValueChange={(value) => onFilterChange("priceRange", value)}
                className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4 [&_[role=slider]]:bg-white [&_[role=slider]]:border-2 [&_[role=slider]]:border-blue-500"
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="font-medium text-gray-900">${priceRange[0]}</div>
              <div className="font-medium text-gray-900">${priceRange[1]}</div>
            </div>
          </div>
        )}
      </div>

      {/* Filter Categories */}
      {filterSections.map((section) => (
        <div key={section.id} className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium text-gray-900">{section.title}</h4>
            <div className="flex items-center gap-2">
              {section.currentValue && (
                <button
                  className="text-xs text-gray-500 hover:text-gray-700 flex items-center transition-colors"
                  onClick={() => onClearFilter(section.id)}
                >
                  <X className="mr-1 h-3 w-3" />
                  Clear
                </button>
              )}
              <button
                onClick={() => toggleSection(section.id)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    expandedSections[section.id] ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          </div>
          {expandedSections[section.id] && (
            <div className="flex flex-wrap gap-2 max-h-60 overflow-y-auto pr-1 custom-scrollbar animate-fadeIn">
              {section.options.map((option) => (
                <Badge
                  key={option.value}
                  variant={
                    section.currentValue === option.value ? "default" : "outline"
                  }
                  className={`cursor-pointer px-3 py-1.5 transition-all duration-200 ${
                    section.currentValue === option.value
                      ? "bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200"
                      : "bg-white hover:bg-gray-50 text-gray-600 border-gray-200"
                  }`}
                  onClick={() => {
                    section.onChange(
                      section.currentValue === option.value ? "" : option.value
                    );
                  }}
                >
                  {option.label}
                  {section.currentValue === option.value && (
                    <Check className="ml-1.5 h-3 w-3 inline" />
                  )}
                </Badge>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};