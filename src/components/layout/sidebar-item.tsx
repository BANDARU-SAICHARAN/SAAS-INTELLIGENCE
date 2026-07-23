"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  const active = pathname === href;

  return (
    <Link
      href={href}
      title={collapsed ? title : ""}
      className={`
        group
        relative
        flex
        items-center
        ${collapsed ? "justify-center" : ""}
        gap-4
        rounded-2xl
        px-4
        py-3
        transition-all
        duration-300
        ${
          active
            ? "border border-cyan-500/20 bg-cyan-500/15 text-cyan-400 shadow-lg shadow-cyan-500/20"
            : "text-slate-400 hover:bg-slate-800 hover:text-white"
        }
      `}
    >
      {active && (
        <div className="absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 rounded-r-full bg-cyan-400" />
      )}

      <Icon
        size={22}
        className="transition-transform duration-300 group-hover:scale-110"
      />

      {!collapsed && (
        <span className="font-medium tracking-wide">{title}</span>
      )}
    </Link>
  );
}