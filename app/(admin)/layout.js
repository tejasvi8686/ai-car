import { getAdmin } from "@/actions/admin";
import React from "react";
import { notFound } from "next/navigation";
import Header from "@/components/Header";

const AdminLayout = async ({ children }) => {
  const admin = await getAdmin();

  if (!admin.authorized) {
    return notFound();
  }

  return (
    <div className="h-full">
      <Header isAdminPage={true} />

      <main className="md:pl-56 pt-[80px] h-full">{children}</main>
    </div>
  );
};

export default AdminLayout;
