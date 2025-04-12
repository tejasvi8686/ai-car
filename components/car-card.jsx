"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  Car as CarIcon,
  Loader2,
  ChevronRight,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { toggleSavedCar } from "@/actions/car-listing";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import useFetch from "@/hooks/use-fetch";

export const CarCard = ({ car }) => {
  const { isSignedIn } = useAuth();
  const router = useRouter();
  const [isSaved, setIsSaved] = useState(car.wishlisted);

  // Use the useFetch hook
  const {
    loading: isToggling,
    fn: toggleSavedCarFn,
    data: toggleResult,
    error: toggleError,
  } = useFetch(toggleSavedCar);

  // Handle toggle result with useEffect
  useEffect(() => {
    if (toggleResult?.success && toggleResult.saved !== isSaved) {
      setIsSaved(toggleResult.saved);
      toast.success(toggleResult.message);
    }
  }, [toggleResult, isSaved]);

  // Handle errors with useEffect
  useEffect(() => {
    if (toggleError) {
      toast.error("Failed to update favorites");
    }
  }, [toggleError]);

  // Handle save/unsave car
  const handleToggleSave = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isSignedIn) {
      toast.error("Please sign in to save cars");
      router.push("/sign-in");
      return;
    }

    if (isToggling) return;

    // Call the toggleSavedCar function using our useFetch hook
    await toggleSavedCarFn(car.id);
  };

  return (
    <Card className="overflow-hidden border-0 bg-white hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 py-0">
      <div className="relative aspect-[4/3]">
        {car.images && car.images.length > 0 ? (
          <div className="relative w-full h-full">
            <Image
              src={car.images[0]}
              alt={`${car.make} ${car.model}`}
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
            <CarIcon className="h-12 w-12 text-gray-300" />
          </div>
        )}

        <div className="absolute top-3 right-3 flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            className={`bg-white/90 backdrop-blur-sm rounded-full p-1.5 ${
              isSaved
                ? "text-red-500 hover:text-red-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={handleToggleSave}
            disabled={isToggling}
          >
            {isToggling ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Heart className={isSaved ? "fill-current" : ""} size={18} />
            )}
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="flex flex-col gap-1.5 mb-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
              {car.make} {car.model}
            </h3>
            {/* <div className="flex items-center gap-1 text-yellow-500">
              <Star className="h-4 w-4 fill-current" />
              <span className="text-sm font-medium">
                {3 + (Math.random() * 2).toFixed(1)}
              </span>
            </div> */}
            <span className="text-xl font-bold text-blue-600">
            ${car.price.toLocaleString()}
          </span>
          </div>
          {/* <span className="text-xl font-bold text-blue-600">
            ${car.price.toLocaleString()}
          </span> */}
        </div>

        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span>{car.year}</span>
          <span className="mx-1.5">•</span>
          <span>{car.transmission}</span>
          <span className="mx-1.5">•</span>
          <span>{car.fuelType}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-5">
          <Badge
            variant="secondary"
            className="bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors"
          >
            {car.bodyType}
          </Badge>
          <Badge
            variant="secondary"
            className="bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors"
          >
            {car.mileage.toLocaleString()} miles
          </Badge>
          <Badge
            variant="secondary"
            className="bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors"
          >
            {car.color}
          </Badge>
        </div>

        <Button
          variant="outline"
          className="w-full group/button hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all duration-300"
          onClick={() => router.push(`/cars/${car.id}`)}
        >
          <span className="flex items-center justify-center gap-2">
            View Details
            <ChevronRight className="h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
          </span>
        </Button>
      </CardContent>
    </Card>
  );
};
