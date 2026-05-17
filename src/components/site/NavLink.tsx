"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  href: string;
  exact?: boolean;
  className?: string;
  activeClassName: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export function NavLink({ href, exact, className, activeClassName, children, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const active = exact
    ? pathname === href
    : pathname === href || (href !== "/" && pathname.startsWith(href.endsWith("/") ? href : `${href}/`));

  return (
    <Link href={href} onClick={onClick} className={cn(className, active && activeClassName)}>
      {children}
    </Link>
  );
}
