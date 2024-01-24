"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavLink({ route, title, active }) {
  const pathname = usePathname();
  return (
    <Link
      href={route}
      className={`px-4 py-3 inline-block font-sans ${
        pathname === route
          ? "bg-secondary-100 text-secondary-700"
          : "text-slate-600"
      }`}
    >
      {title}
    </Link>
  );
}
