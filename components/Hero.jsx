"use client";

import { Search, Car, Calendar, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { featuredCars } from "@/lib/data";
import CarCard from "./CarCard";
import Link from "next/link";
export default function Hero() {
  return (
    <main>
      {/* Hero Section */}
      <div className="relative min-h-screen ">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Find your Dream Car with{" "}
              <span className="text-blue-400">Vehiql AI</span>
            </h1>
            <p className="text-xl  md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
              Advanced AI Car Search and test drive from thousands of vehicles
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md p-2 rounded-2xl">
              <div className="flex items-center bg-white rounded-xl">
                <div className="flex-1 p-3">
                  <input
                    type="text"
                    placeholder="Search by make, model, or features..."
                    className="w-full focus:outline-none text-gray-700 text-lg"
                  />
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl m-1 flex items-center gap-2 transition-colors">
                  <Search className="w-5 h-5" />
                  <span>Search</span>
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
                <div className="bg-blue-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">
                  AI-Powered Matching
                </h3>
                <p className="text-gray-300">
                  Smart recommendations based on your preferences and driving
                  style
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
                <div className="bg-blue-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">
                  Easy Scheduling
                </h3>
                <p className="text-gray-300">
                  Book test drives instantly with real-time availability
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
                <div className="bg-blue-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">
                  Verified Reviews
                </h3>
                <p className="text-gray-300">
                  Real feedback from verified buyers and test drivers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Cars Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Cars</h2>
            <Button variant="ghost" className="flex items-center" asChild>
              <Link href="/cars">
                View All <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
