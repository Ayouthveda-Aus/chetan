"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  exact?: boolean;
  onClick?: () => void;
}

export function NavLink({
  href,
  children,
  className,
  exact = false,
  onClick,
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={cn(
        "relative px-3 py-2 text-sm font-medium transition-colors duration-200",
        "hover:text-brand-600 focus:text-brand-600",
        "focus:ring-brand-500 focus:ring-2 focus:ring-offset-2 focus:outline-none",
        "rounded-md",
        isActive
          ? "text-brand-700 font-semibold"
          : "text-ink-700 hover:text-brand-600",
        className
      )}
      aria-current={isActive ? "page" : undefined}
      onClick={onClick}
    >
      {children}
      {isActive && (
        <span
          className="bg-brand-600 absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full"
          aria-hidden="true"
        />
      )}
    </Link>
  );
}
