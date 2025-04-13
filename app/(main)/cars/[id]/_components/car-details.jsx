"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useAuth } from "@clerk/nextjs";
import { AlertCircle, Calendar } from "lucide-react";
import {
  Car,
  Fuel,
  Gauge,
  LocateFixed,
  Share2,
  Heart,
  MessageSquare,
  Currency,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toggleSavedCar } from "@/actions/car-listing";
import useFetch from "@/hooks/use-fetch";
import { formatCurrency } from "@/lib/helper";
import { format } from "date-fns";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EmiCalculator from "./emi-calculator";

export function CarDetails({ car, testDriveInfo }) {
  const router = useRouter();
  const { isSignedIn } = useAuth();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(car.wishlisted);

  const {
    loading: savingCar,
    fn: toggleSavedCarFn,
    data: toggleResult,
    error: toggleError,
  } = useFetch(toggleSavedCar);

  // Handle toggle result with useEffect
  useEffect(() => {
    if (toggleResult?.success) {
      setIsWishlisted(toggleResult.saved);
      toast.success(toggleResult.message);
    }
  }, [toggleResult]);

  // Handle errors with useEffect
  useEffect(() => {
    if (toggleError) {
      toast.error("Failed to update favorites");
    }
  }, [toggleError]);

  // Handle save car
  const handleSaveCar = async () => {
    if (!isSignedIn) {
      toast.error("Please sign in to save cars");
      router.push("/sign-in");
      return;
    }

    if (savingCar) return;

    // Use the toggleSavedCarFn from useFetch hook
    await toggleSavedCarFn(car.id);
  };

  // Handle share
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `${car.year} ${car.make} ${car.model}`,
          text: `Check out this ${car.year} ${car.make} ${car.model} on Vehiql!`,
          url: window.location.href,
        })
        .catch((error) => {
          console.log("Error sharing", error);
          copyToClipboard();
        });
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard");
  };

  // Handle book test drive
  const handleBookTestDrive = () => {
    if (!isSignedIn) {
      toast.error("Please sign in to book a test drive");
      router.push("/sign-in");
      return;
    }
    router.push(`/test-drive/${car.id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50/50 to-white rounded-2xl">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Image Gallery */}
        <div className="w-full lg:w-7/12">
          <div className="aspect-video rounded-md overflow-hidden relative mb-8 shadow-2xl group">
            {car.images && car.images.length > 0 ? (
              <Image
                src={car.images[currentImageIndex]}
                alt={`${car.year} ${car.make} ${car.model}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-indigo-50 to-white flex items-center justify-center">
                <Car className="h-24 w-24 text-indigo-200" />
              </div>
            )}
          </div>

          {/* Thumbnails */}
          {car.images && car.images.length > 1 && (
            <div className="flex gap-4 overflow-x-auto pb-4 pt-2 pl-1 scrollbar-hide">
              {car.images.map((image, index) => (
                <div
                  key={index}
                  className={`relative cursor-pointer rounded-2xl h-28 w-36 flex-shrink-0 transition-all duration-300 ${
                    index === currentImageIndex
                      ? "ring-2 ring-indigo-500 ring-offset-2 shadow-lg"
                      : "opacity-80 hover:opacity-100 hover:shadow-md"
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <Image
                    src={image}
                    alt={`${car.year} ${car.make} ${car.model} - view ${index + 1}`}
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Secondary Actions */}
          <div className="flex mt-8 gap-4">
            <Button
              variant="outline"
              className={`flex items-center gap-2 flex-1 h-12 text-base rounded-xl transition-all duration-300 ${
                isWishlisted 
                  ? "text-rose-500 border-rose-500 hover:bg-rose-50 hover:text-rose-600" 
                  : "hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200"
              }`}
              onClick={handleSaveCar}
              disabled={savingCar}
            >
              <Heart
                className={`h-5 w-5 ${isWishlisted ? "fill-rose-500" : ""}`}
              />
              {isWishlisted ? "Saved" : "Save"}
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2 flex-1 h-12 text-base rounded-xl hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all duration-300"
              onClick={handleShare}
            >
              <Share2 className="h-5 w-5" />
              Share
            </Button>
          </div>
        </div>

        {/* Car Details */}
        <div className="w-full lg:w-5/12 space-y-6">
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="text-sm font-medium px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700">
              {car.bodyType}
            </Badge>
            <Badge variant="outline" className="text-sm font-medium px-4 py-1.5 rounded-full border-indigo-200 text-indigo-700">
              {car.status}
            </Badge>
          </div>

          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              {car.year} {car.make} {car.model}
            </h1>
            <div className="text-3xl font-bold text-indigo-600 mt-3">
              {formatCurrency(car.price)}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 p-2 items-center bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="flex flex-col items-center gap-2 text-center p-2">
              <Gauge className="text-indigo-600 h-6 w-6" />
              <span className="text-sm font-medium">{car.mileage.toLocaleString()} miles</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <Fuel className="text-indigo-600 h-6 w-6" />
              <span className="text-sm font-medium">{car.fuelType}</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <Car className="text-indigo-600 h-6 w-6" />
              <span className="text-sm font-medium">{car.transmission}</span>
            </div>
          </div>

          <Dialog>
            <DialogTrigger className="w-full">
              <Card className="hover:shadow-lg transition-all duration-300 rounded-2xl border border-gray-100 p-2">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 text-lg font-medium mb-3">
                    <Currency className="h-6 w-6 text-indigo-600" />
                    <h3>EMI Calculator</h3>
                  </div>
                  <div className="text-sm text-gray-600">
                    Estimated Monthly Payment:{" "}
                    <span className="font-bold text-gray-900">
                      {formatCurrency(car.price / 60)}
                    </span>{" "}
                    for 60 months
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    *Based on $0 down payment and 4.5% interest rate
                  </div>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-8xl rounded-2xl">
              <DialogHeader>
                <DialogTitle>Vehiql Car Loan Calculator</DialogTitle>
                <EmiCalculator price={car.price} />
              </DialogHeader>
            </DialogContent>
          </Dialog>

          {/* Request More Info */}
          <Card className="hover:shadow-lg transition-all duration-300 rounded-2xl border border-gray-100 p-2">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 text-lg font-medium mb-3">
                <MessageSquare className="h-6 w-6 text-indigo-600" />
                <h3>Have Questions?</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Our representatives are available to answer all your queries about this vehicle.
              </p>
              <a href="mailto:tejasviraj8686@gmail.com">
                <Button variant="outline" className="w-full h-11 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all duration-300">
                  Request Info
                </Button>
              </a>
            </CardContent>
          </Card>

          {(car.status === "SOLD" || car.status === "UNAVAILABLE") && (
            <Alert variant="destructive" className="rounded-xl bg-rose-50 border-rose-200 text-rose-700">
              <AlertCircle className="h-5 w-5" />
              <AlertTitle className="capitalize">
                This car is {car.status.toLowerCase()}
              </AlertTitle>
              <AlertDescription>Please check again later.</AlertDescription>
            </Alert>
          )}

          {/* Book Test Drive Button */}
          {car.status !== "SOLD" && car.status !== "UNAVAILABLE" && (
            <Button
              className="w-full h-14 text-lg font-medium rounded-xl bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all duration-300"
              onClick={handleBookTestDrive}
              disabled={testDriveInfo.userTestDrive}
            >
              <Calendar className="mr-2 h-5 w-5" />
              {testDriveInfo.userTestDrive
                ? `Booked for ${format(
                    new Date(testDriveInfo.userTestDrive.bookingDate),
                    "EEEE, MMMM d, yyyy"
                  )}`
                : "Book Test Drive"}
            </Button>
          )}
        </div>
      </div>

      {/* Details & Features Section */}
      <div className="mt-20 p-10 bg-white rounded-3xl shadow-sm border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-900">Description</h3>
            <p className="text-gray-700 leading-relaxed">
              {car.description}
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-900">Features</h3>
            <ul className="grid grid-cols-1 gap-4">
              {[
                { label: `${car.transmission} Transmission` },
                { label: `${car.fuelType} Engine` },
                { label: `${car.bodyType} Body Style` },
                car.seats && { label: `${car.seats} Seats` },
                { label: `${car.color} Exterior` }
              ].filter(Boolean).map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="h-2 w-2 bg-indigo-600 rounded-full"></span>
                  <span className="text-gray-700">{feature.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Specifications Section */}
      <div className="mt-10 p-10 bg-white rounded-3xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold mb-10 text-gray-900">Specifications</h2>
        <div className="bg-gradient-to-br from-indigo-50/50 to-white rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
            {[
              { label: "Make", value: car.make },
              { label: "Model", value: car.model },
              { label: "Year", value: car.year },
              { label: "Body Type", value: car.bodyType },
              { label: "Fuel Type", value: car.fuelType },
              { label: "Transmission", value: car.transmission },
              { label: "Mileage", value: `${car.mileage.toLocaleString()} miles` },
              { label: "Color", value: car.color },
              car.seats && { label: "Seats", value: car.seats }
            ].filter(Boolean).map((spec, index) => (
              <div key={index} className="flex justify-between py-3 border-b border-indigo-100">
                <span className="text-gray-600">{spec.label}</span>
                <span className="font-medium text-gray-900">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dealership Location Section */}
      <div className="mt-10 p-10 bg-white rounded-3xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold mb-10 text-gray-900">Dealership Location</h2>
        <div className="bg-gradient-to-br from-indigo-50/50 to-white rounded-2xl p-8">
          <div className="flex flex-col md:flex-row gap-10 justify-between">
            {/* Dealership Name and Address */}
            <div className="flex items-start gap-4">
              <LocateFixed className="h-6 w-6 text-indigo-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-lg text-gray-900">Vehiql Motors</h4>
                <p className="text-gray-600 mt-2">
                  {testDriveInfo.dealership?.address || "Not Available"}
                </p>
                <p className="text-gray-600 mt-2">
                  Phone: {testDriveInfo.dealership?.phone || "Not Available"}
                </p>
                <p className="text-gray-600">
                  Email: {testDriveInfo.dealership?.email || "Not Available"}
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="md:w-1/2 lg:w-1/3">
              <h4 className="font-medium text-lg mb-6 text-gray-900">Working Hours</h4>
              <div className="space-y-4">
                {(testDriveInfo.dealership?.workingHours || [
                  { dayOfWeek: "MONDAY", isOpen: true, openTime: "9:00", closeTime: "18:00" },
                  { dayOfWeek: "TUESDAY", isOpen: true, openTime: "9:00", closeTime: "18:00" },
                  { dayOfWeek: "WEDNESDAY", isOpen: true, openTime: "9:00", closeTime: "18:00" },
                  { dayOfWeek: "THURSDAY", isOpen: true, openTime: "9:00", closeTime: "18:00" },
                  { dayOfWeek: "FRIDAY", isOpen: true, openTime: "9:00", closeTime: "18:00" },
                  { dayOfWeek: "SATURDAY", isOpen: true, openTime: "10:00", closeTime: "16:00" },
                  { dayOfWeek: "SUNDAY", isOpen: false }
                ]).map((day) => (
                  <div key={day.dayOfWeek} className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      {day.dayOfWeek.charAt(0) + day.dayOfWeek.slice(1).toLowerCase()}
                    </span>
                    <span className="font-medium text-gray-900">
                      {day.isOpen ? `${day.openTime} - ${day.closeTime}` : "Closed"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
