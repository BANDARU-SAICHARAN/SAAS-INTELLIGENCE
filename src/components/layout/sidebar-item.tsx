"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface SidebarItemProps {
  icon: LucideIcon;
  title: string;
  href: string;
  collapsed: boolean;
}

export default function SidebarItem({
  icon: Icon,
  title,
  href,
  collapsed,
}: SidebarItemProps) {
  return (
    <Link
      href={href}
      className="
        flex
        items-center
        gap-4
        rounded-2xl
        px-4
        py-3
        text-slate-300
        transition-all
        duration-300
        hover:bg-cyan-500/10
        hover:text-cyan-400
      "
    >
      <Icon size={22} />

      {!collapsed && (
        <span className="font-medium">
          {title}
        </span>
      )}
    </Link>
  );
}