"use client";

import { Search, Car, Calendar, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { featuredCars, carMakes, features, bodyTypes } from "@/lib/data";
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
      {/* Browse by Make Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Browse by Make
              </h2>
              <p className="text-gray-600 mt-2">
                Explore our extensive collection of premium vehicles
              </p>
            </div>
            <Button variant="ghost" className="flex items-center group" asChild>
              <Link href="/cars">
                View All{" "}
                <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {carMakes.map((make) => (
              <Link
                key={make.name}
                href={`/cars?make=${make.name}`}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 text-center border border-gray-100 hover:border-blue-100">
                  <div className="h-20 w-full mb-4 relative flex items-center justify-center">
                    <Image
                      src={make.image}
                      alt={make.name}
                      width={80}
                      height={80}
                      className="object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {make.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Platform
            </h2>
            <p className="text-lg text-gray-600">
              Experience the future of car buying with our innovative platform
              designed to make your journey seamless and enjoyable
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div
                  className={`bg-${feature.color}-100 text-${feature.color}-600 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="h-8 w-8" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900">
                      {feature.title}
                    </h3>
                    <span
                      className={`text-sm font-semibold text-${feature.color}-600 bg-${feature.color}-50 px-3 py-1 rounded-full`}
                    >
                      {feature.stats}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Body Type */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Find Your Perfect Style
              </h2>
              <p className="text-lg text-gray-600">
                Explore our diverse collection of vehicles across different body
                types, each designed to match your unique lifestyle and
                preferences.
              </p>
            </div>
            <Button variant="ghost" className="flex items-center group cursor-pointer" asChild>
              <Link href="/cars">
                View All{" "}
                <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bodyTypes.map((type) => (
              <Link
                key={type.name}
                href={`/cars?bodyType=${type.name.toLowerCase()}`}
                className="group relative block"
              >
                <div className="relative h-[300px] w-full overflow-hidden rounded-2xl">
                  <Image
                    src={type.imageUrl}
                    alt={type.name}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity group-hover:opacity-90" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-end justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:translate-x-2 transition-transform">
                          {type.name}
                        </h3>
                        <p className="text-gray-300 group-hover:translate-x-2 transition-transform delay-75">
                          {type.description}
                        </p>
                      </div>
                      {/* <span className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        {type.count} vehicles
                      </span> */}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </section>
    </main>
  );
}
