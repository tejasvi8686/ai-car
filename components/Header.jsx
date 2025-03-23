"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { CarFront, Heart, Layout, ArrowLeft, Car } from "lucide-react";
const Header = ({ isAdminPage = false }) => {
  const isAdmin = false;
  return (
    <header className="fixed top-0 w-full bg-black/20 backdrop-blur-lg z-50 ">
      <nav className="mx-auto px-4 py-4 flex items-center justify-between">
        <Link href={isAdminPage ? "/admin" : "/"} className="flex">
          <div className="flex items-center gap-2">
            <Car className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold text-white">Vehiql AI</span>
          </div>
          {isAdminPage && <span className="text-sm text-gray-500">Admin</span>}
        </Link>

        <div className="flex items-center space-x-4">
          {isAdminPage ? (
            <Link href="/">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft size={18} />
                <span className="hidden md:inline">Back to App</span>
              </Button>
            </Link>
          ) : (
            <SignedIn>
              <Link href="/saved-cars">
                <Button>
                  <CarFront size={18} />
                  <span className="hidden md:inline">Saved Cars</span>
                </Button>
              </Link>
              {!isAdmin ? (
                <Link href="/reservations">
                  <Button variant="outline">
                    <Heart size={18} />
                    <span className="hidden md:inline">My Reservations</span>
                  </Button>
                </Link>
              ) : (
                <Link href="/admin">
                  <Button variant="outline">
                    <Layout size={18} />
                    <span className="hidden md:inline">Admin Portal</span>
                  </Button>
                </Link>
              )}
            </SignedIn>
          )}

          <SignedOut>
            <SignInButton forceRedirectUrl="/">
              <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>


          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
