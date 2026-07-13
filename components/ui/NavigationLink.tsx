import Link from "next/link";
import { ReactNode } from "react";

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
      className="text-sm font-medium transition-colors hover:opacity-70"
    >
      {children}
    </Link>
  );
}