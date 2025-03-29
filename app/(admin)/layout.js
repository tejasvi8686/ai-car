import { getAdmin } from "@/actions/admin";
import React from "react";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import { Sidebar } from "./admin/_components/sidebar";

export default async function AdminLayout({ children }) {
  const admin = await getAdmin();

  if (!admin.authorized) {
    return notFound();
  }

  return (
    <div className="h-full">
      <Header isAdminPage={true} />

      <main className="md:pl-56 pt-[68px] h-full">{children}</main>
    
      <div className="flex h-full w-56 flex-col top-17 fixed inset-y-0 z-50">
        <Sidebar />
      </div>

    </div>
  );
};

