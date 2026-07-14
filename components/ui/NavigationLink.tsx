import Link from "next/link";
import type { ReactNode } from "react";

type NavigationLinkProps = {
  href: string;
  children: ReactNode;
};

export default function NavigationLink({
  href,
  children,
}: NavigationLinkProps) {
  return (
    <Link
      href={href}
      className="text-sm font-medium uppercase tracking-wider text-espresso transition-colors duration-300 hover:text-coffee"
    >
      {children}
    </Link>
  );
}